import { useContext, useEffect, useState } from 'react';
import { Board, Confirm, GameTitle } from 'components';
import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';

import classes from './Game.module.css';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;
  
  const { setLocation, setGameScore, level } = useContext(AppContext);

  const [move, setMove] = useState(0);
  const [moveToFinish, setMoveToFinish] = useState(0);

  const moveChangeToUp = () => {
    setMove(move + 1);
  };

  const changeMoveToFinish = () => {
    setMoveToFinish(moveToFinish + 1);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (moveToFinish === +level) {
      setTimeout(() => {
        setGameScore({ moves: move });
        setLocation(VIEWS.Results);
      }, 1500);
    }
  }, [moveToFinish, setLocation, move, setGameScore, level]);

  return (
    <main className="App-header"> {/* z-index = 0 */}

      <div>
        {modalIsOpen && (
          <Confirm onRestartGame={onRestartGame} onClickPlay={closeModal} /> /* z-index = 100 */
        )}
      </div>
      
      <div className={classes.gridLayout}> {/* z-index = 2 */}
        <div className={classes.emptyDiv1}></div>
        <div className={classes.roofTitle}>
          <GameTitle style={{fontSize: "48px"}} /> {/* z-index = 2 */}
        </div>
        <div className={classes.emptyDiv2}></div>
        <div className={classes.stats}>
          <div className={classes.moveCounter}>Ход: {move}</div>
          <div className={classes.move}>Счёт: {moveToFinish} / {level}</div>
        </div>
        <div className={classes.div1} >
          <Board moveChange={moveChangeToUp} moveToFinish={changeMoveToFinish} level={level} />
        </div>
        <div className={classes.div2}>
          <button className={classes.pause} onClick={onPauseGame}></button>
          <button className={classes.restart} onClick={openModal}></button>
        </div>
      </div>
    </main>
  );
};