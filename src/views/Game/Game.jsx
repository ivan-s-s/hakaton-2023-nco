import { useContext, useEffect, useState } from 'react';
import { Board, BoardBackground, Confirm, GameTitle, PauseModal } from 'components';
import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';

import classes from './Game.module.css';

export const Game = (props) => {
  const { onRestartGame } = props;
  
  const { setLocation, setGameScore, level } = useContext(AppContext);

  const [move, setMove] = useState(0);
  const [moveToFinish, setMoveToFinish] = useState(0);

  const moveChangeToUp = () => {
    setMove(move + 1);
  };

  const changeMoveToFinish = () => {
    setMoveToFinish(moveToFinish + 1);
  };

  const [modalIsOpen, setModalIsOpen] = useState(null);
  const openModalPause = () => setModalIsOpen('pause');
  const openModalConfirm = () => setModalIsOpen('confirm');
  const closeModal = () => setModalIsOpen(null);

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
    <BoardBackground />
      <div>
        {modalIsOpen === 'pause' && (
          <PauseModal onClickPlay={closeModal} />
        )}
        {modalIsOpen === 'confirm' && (
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
          <button className={classes.pause} onClick={openModalPause}></button>
          <button className={classes.restart} onClick={openModalConfirm}></button>
        </div>
      </div>
    </main>
  );
};