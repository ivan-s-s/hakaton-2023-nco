import cloud from "../../assets/images/cloud1.svg";
import classes from './BoardBackground.module.css';

export const BoardBackground = () => {
  return (
    <div className={classes.BoardBackground}>
      <div className={classes.Clouds}>
        <img src={cloud} alt="cloud" className={classes.bcCloud01}/>
        <img src={cloud} alt="cloud" className={classes.bcCloud02}/>
        <img src={cloud} alt="cloud" className={classes.bcCloud03}/>
        <img src={cloud} alt="cloud" className={classes.bcCloud04}/>
        <img src={cloud} alt="cloud" className={classes.bcCloud05}/>
        <img src={cloud} alt="cloud" className={classes.bcCloud06}/>
      </div>
    </div>
  );
};

export default BoardBackground;
