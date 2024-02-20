import classes from './Confirm.module.css';

export const Confirm = (props) => {
  const { onRestartGame, onClickPlay } = props;

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
    <div className={classes.modalContainer} onClick={clickOutOfModal}>
      <fieldset className={classes.modal}>
        <legend className={classes.legend}>Предупреждение</legend>
        <p className={classes.question}>Вы точно хотите начать заново?</p>
        <button onClick={onRestartGame} className={classes.button}>
          новая игра
        </button>
        <button
          onClick={onClickPlay}
          className={`${classes.button} ${classes.violet}`}
        >
          вернуться
        </button>
      </fieldset>
    </div>
  );
};
