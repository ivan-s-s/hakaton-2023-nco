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
          <GameTitle />
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
          <LevelButton onClick={onClickStartGame}>Легкий</LevelButton>
          <LevelButton onClick={onClickStartGame}>Средний</LevelButton>
          <LevelButton onClick={onClickStartGame}>Тяжелый</LevelButton>
          <LevelButton onClick={onClickStartGame}>Мультиплеер</LevelButton>
          <LevelButton onClick={onClickStartGame} style={{backgroundColor: "#FFC212", fontSize: "24px", width: "324px", height: "57px", borderRadius: "28px", alignSelf: "flex-end", marginRight: "48px"}}>лидеры игры</LevelButton>
        </div>
      </div>
    </div>
  );
};
