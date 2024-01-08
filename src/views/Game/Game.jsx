import { useContext, useEffect, useState } from 'react';
import { Board, Confirm, GameTitle } from 'components';

import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';

import classes from './Game.module.css';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;
  
  const {setLocation, setGameScore } = useContext(AppContext);

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

  const roofLeft = () => {
    const left = document.querySelector("#boardGrid").getBoundingClientRect().x - document.querySelector(".gridBoardLayout").getBoundingClientRect().x;
  };

  useEffect(() => {
    if (moveToFinish === 8) {
      console.log('Finish');
      setGameScore({ moves: move });
      setLocation(VIEWS.Results);
    }
  }, [moveToFinish, setLocation, move, setGameScore]);

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
          <GameTitle style={{fontSize: "42px"}}/> {/* z-index = 2 */}
        </div>
        <div className={classes.emptyDiv2}></div>
        <div className={classes.stats}>
          <div className={classes.moveCounter}>Ход: {move}</div>
          <div className={classes.move}>Счёт: {moveToFinish} / 8</div>
        </div>
        <div className={classes.div1} >
          <Board moveChange={moveChangeToUp} moveToFinish={changeMoveToFinish}/>
        </div>
        <div className={classes.div2}>
          <button className={classes.pause} onClick={onPauseGame}></button>
          <button className={classes.restart} onClick={openModal}></button>
        </div>
      </div>
    </main>
  );
};


//<div className={classes.title}>
//        <GameTitle style={{fontSize: "42px"}}/> {/* z-index = 2 */}
//      </div>