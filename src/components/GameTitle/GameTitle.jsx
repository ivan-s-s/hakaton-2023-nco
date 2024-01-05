import { star } from 'assets/images';
import classes from './GameTitle.module.css';

export const GameTitle = ({children, litleStar, bigStar}) => {
  return (
    <div>
      <h1 className={classes.title}>
        {litleStar && (
          <img
            src={star}
            alt="star"
            className={`${classes.star} ${classes.smallStar}`}
          />
        )}
        {bigStar && (
          <img
            src={star}
            alt="star"
            className={`${classes.star} ${classes.bigStar}`}
          />
        )}
        {children ? children : "Найди пару"}
      </h1>
    </div>
  );
};
