import { GameTitle, LevelButton } from 'components';
import classes from './Settings.module.css';

export const Settings = (props) => {
  const { onClickStartGame } = props;
  return (
    <div className={classes.settings}>
      <div className={classes.gradient}></div>
      <div className={classes.container}>
        <GameTitle />
        <legend className={classes.legend}>Выбери уровень</legend>
        <LevelButton onClick={onClickStartGame} style={{marginBottom: "58px"}}>Легкий</LevelButton>
        <LevelButton onClick={onClickStartGame} style={{marginBottom: "58px"}}>Средний</LevelButton>
        <LevelButton onClick={onClickStartGame} style={{marginBottom: "58px"}}>Тяжелый</LevelButton>
        <LevelButton onClick={onClickStartGame}>Мультиплеер</LevelButton>
        <LevelButton onClick={onClickStartGame} style={{backgroundColor: "#FFC212", fontSize: "24px", width: "324px", height: "57px", borderRadius: "28px", alignSelf: "flex-end", marginRight: "48px"}}>лидеры игры</LevelButton>
      </div>
    </div>
  );
};
