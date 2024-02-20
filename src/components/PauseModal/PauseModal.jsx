import classes from './PauseModal.module.css';

export const PauseModal = (props) => {
  const { onClickPlay } = props;

  document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape'){
      onClickPlay()
    }
  });

  const clickOutOfModal = (e) => {
    if (e.target.localName === 'div') {
      onClickPlay()
    }
  };

  return (
    <div className={classes.PauseContainer} onClick={clickOutOfModal}>
          <fieldset className={classes.modal}>
            <legend className={classes.legend}>ПАУЗА</legend>
            <p className={classes.question}>Вернуться к игре</p>
            <button className={classes.playBtn} onClick={onClickPlay}>
              <div className={classes.playIcon}>
                <div className={classes.play}></div>
              </div>
            </button>
          </fieldset>
    </div>
  );
};
