import classes from './CloudsContainer.module.css';
import cloud1 from '../../assets/images/cloud1.svg';
import cloud2 from '../../assets/images/cloud2.svg';

export const CloudsContainer = (props) => {
  return (
    <div className={classes.CloudsContainer}>
      <img src={cloud1} alt="" className={classes.CloudOne}/>
      <img src={cloud2} alt="" className={classes.CloudTwo}/>

      <img src={cloud1} alt="" className={classes.CloudThree}/>
      <img src={cloud2} alt="" className={classes.CloudFour}/>

      <img src={cloud2} alt="" className={classes.CloudFive}/>
    </div>
  );
};