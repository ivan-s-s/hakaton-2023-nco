import { GameTitle } from 'components';
import classes from './Settings.module.css';

export const Settings = (props) => {
  const { onClickStartGame } = props;
  return (
    <div className={classes.settings}>
      Настройки (выбери уровень)
      <button onClick={onClickStartGame}>Начать игру</button>
      <GameTitle />
    </div>
  );
};
