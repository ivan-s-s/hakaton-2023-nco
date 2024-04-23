import classes from "./LevelButton.module.css";

export const LevelButton = ({children, onClick, style, ...props}) => {
  return (
    <button
      className={classes.button}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};