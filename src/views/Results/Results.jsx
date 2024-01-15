import { useContext } from 'react';
import classes from './Results.module.css';
import { AppContext } from 'utils/context';
import { GameTitle, PageTitle } from 'components';

export const Results = (props) => {
  const { onRestartGame } = props;
  const {
    gameScore: { moves },
  } = useContext(AppContext);

  return (
    <div className={classes.settings}>
      <GameTitle style={{ margin: "48px"}}/>
      <fieldset className={classes.cover}>
        <PageTitle>Поздравляем!</PageTitle>
        <p className={classes.titleWin}>Вы прошли игру</p>
        <p className={classes.titleWin}>За {moves} ходов</p>
      </fieldset>
      <button className={classes.restartButton} onClick={onRestartGame}>Начать сначала</button>
    </div>
  );
};
