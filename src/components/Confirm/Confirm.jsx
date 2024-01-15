import classes from './Confirm.module.css';

export const Confirm = (props) => {
  const { onRestartGame, onClickPlay } = props;

  // const onNewGame = () => {
  //   onRestartGame();
  //   onClickPlay();
  // };

  return (
    <div className={classes.modalContainer}>
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
