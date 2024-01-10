import classes from './GameTitle.module.css';

export const GameTitle = ({children, style, ...rest}) => {
  return (
    <div>
      <h1 className={classes.title} style={style} {...rest}>
        {children ? children : "Найди пару"}
      </h1>
    </div>
  );
};
