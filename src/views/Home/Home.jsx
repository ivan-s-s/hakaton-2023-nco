import startImg from 'assets/images/start.png';
import classes from './Home.module.css';
import { star } from 'assets/images';
import { GameTitle } from 'components';

export const Home = (props) => {
  console.log(document.querySelector("ccc"));
  const { onClickPlay } = props;

  return (
    <div className={classes.home}>
      <div className={classes.gradient2}>
        <div className={classes.gradientImgFar}></div>
      </div>
      <div className={classes.gradient}>
        <div className={classes.gradientImg}></div>
      </div>
      <img src={startImg} className={classes.startImg} alt="start" />
      <div className={classes.startContainer}>
        <div className={classes.startBox}>
          <img
            src={star}
            alt="star"
            className={`${classes.star} ${classes.smallStar}`}
          />
          <img
            src={star}
            alt="star"
            className={`${classes.star} ${classes.bigStar}`}
          />
          <GameTitle style={{fontSize: "86px"}}/>
        </div>
        <div className={classes.divButton}>
          <button className={classes.playBtn} onClick={onClickPlay}>
            <div className={classes.playIcon}>
              <div className={classes.play}></div>
            </div>
          </button>
          <div className={classes.start}>начать игру</div>
        </div>
      </div>
    </div>
  );
};
