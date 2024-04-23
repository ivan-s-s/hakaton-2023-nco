import { GameTitle, LevelButton } from 'components';
import { star } from 'assets/images';
import classes from './Settings.module.css';

export const Settings = (props) => {
  const { onClickStartGame } = props;

  return (
    <div className={classes.settings}>
      <div className={classes.gradient}></div>
      <div className={classes.container}>
        <div className={classes.title}>
          <div className={classes.stars}>
            <img
              src={star}
              alt=""
              className={`${classes.starOne}`}
            />
            <img
              src={star}
              alt=""
              className={`${classes.starTwo}`}
            />
          </div>
          <GameTitle style={{fontSize: "86px"}}/>
          <div className={classes.stars}>
            <img
              src={star}
              alt=""
              className={`${classes.starThree}`}
            />
            <img
              src={star}
              alt=""
              className={`${classes.starFour}`}
            />
          </div>
        </div>
        <legend className={classes.legend}>Выбери уровень</legend>
        <div className={classes.buttonsPanel}>
          <LevelButton onClick={onClickStartGame} id="8">Легкий</LevelButton>
          <LevelButton onClick={onClickStartGame} id="12">Средний</LevelButton>
          <LevelButton onClick={onClickStartGame} id="18">Тяжелый</LevelButton>
        </div>
      </div>
    </div>
  );
};
