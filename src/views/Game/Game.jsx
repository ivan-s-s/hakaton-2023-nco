import { Board, Confirm, GameTitle } from 'components';
import classes from './Game.module.css';
import { useEffect, useState } from 'react';

export const Game = (props) => {
  const { onRestartGame, onPauseGame } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const roofLeft = () => {
    const left = document.querySelector("#boardGrid").getBoundingClientRect().x - document.querySelector(".gridBoardLayout").getBoundingClientRect().x;
  };

  // const roof = () => {
  //   const roofWidth = document.querySelector("#boardGrid").getBoundingClientRect().width;
  //   const roofHeight = roofWidth / 2;

  //   return [
  //     {width: `${roofWidth}px`,
  //     height: `${roofHeight}px`
  //   }]
  // };
  // console.log(roof())
  // // useEffect(() => {
  // //   document.querySelector("#roof").style.width = `${document.querySelector("#boardGrid").clientWidth}`;
  // //   document.querySelector("#roof").style.heught = `${document.querySelector("#boardGrid").clientWidth / 2}`;

  // //   document.querySelector("#roof").style.top = `${document.querySelector("#boardGrid").getBoundingClientRect().x}`;
  // // }, []);

  // // document.querySelector("#roof").setAttribute('style', `${document.querySelector("#boardGrid").clientWidth}`);
  // //   // document.querySelector("#roof").style.heught = `${document.querySelector("#boardGrid").clientWidth / 2}`;

  // // // document.querySelector("#roof").style.top = document.querySelector("#boardGrid").getBoundingClientRect().x;

  // // // document.querySelector("#boardGrid").getBoundingClientRect().x

  return (
    <main className="App-header">
      
      <header>
        <div>
          {modalIsOpen && (
            <Confirm onRestartGame={onRestartGame} onClickPlay={closeModal} />
          )}
        </div>
        <GameTitle />
      </header>
      <div className={classes.gridLayout}>
        <div className={classes.gridBoardLayout}>
          <div>
            <div className={classes.roof} style={{width: "500px", height: "180px", left: "25%"}}></div>
          <Board className={classes.div1} />
          </div>
          
          <div className={classes.div2}>
            <button className={classes.pause} onClick={onPauseGame}></button>
            <button className={classes.restart} onClick={openModal}></button>
          </div>
        </div>
      </div>
    </main>
  );
};
