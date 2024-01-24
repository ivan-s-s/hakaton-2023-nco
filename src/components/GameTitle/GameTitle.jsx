import classes from './GameTitle.module.css';

export const GameTitle = ({children, style, ...rest}) => {
  return (
    <div style={style}>
      <h1 className={classes.title} {...rest}>
        {children ? children : "Найди пару"}
      </h1>
    </div>
  );
};
