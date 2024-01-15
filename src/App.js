import { useEffect, useState } from 'react';
import './App.css';
import { Home, Game, Results, Pause, Settings } from './views';
import { VIEWS } from './utils/constants';
import { AppContext } from 'utils/context';

function App() {
  const [location, setLocation] = useState(VIEWS.Home);
  const [level, setLevel] = useState(8);
  const [gameScore, setGameScore] = useState({
    points: 0,
    moves: 0,
  });
  const isHomeOpen = location === VIEWS.Home;
  const isSettingsOpen = location === VIEWS.Settings;
  const isGameOpen = location === VIEWS.Game;
  const isResultsOpen = location === VIEWS.Results;
  const isPauseOpen = location === VIEWS.Pause;

  const goToNextPage = (viewToOpen) => {
    setLocation(viewToOpen);
  };

  const handleRestartGame = () => {
    setGameScore({ moves: 0, points: 0 });
    goToNextPage(VIEWS.Game);
  };

  const gameLevelToPlay = (value) => {
    setLevel(value.target.id);
    goToNextPage(VIEWS.Game);
  };

  useEffect(() => {
    document.title = `Игра Найди пару - Find a match (${location})`;
  }, [location]);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ location, setLocation, gameScore, setGameScore, level, setLevel }}
      >
        {isHomeOpen && <Home onClickPlay={() => goToNextPage(VIEWS.Settings)} />}
        {isSettingsOpen && <Settings onClickStartGame={gameLevelToPlay} />}
        {isGameOpen && (
          <Game
            onRestartGame={handleRestartGame}
            onPauseGame={() => goToNextPage(VIEWS.Pause)}
          />
        )}
        {isPauseOpen && <Pause onClickPlay={() => goToNextPage(VIEWS.Game)} />}
        {isResultsOpen && <Results onRestartGame={handleRestartGame} />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
