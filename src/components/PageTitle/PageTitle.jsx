import classes from './PageTitle.module.css';

export const PageTitle = ({children, style, ...rest}) => {
  return (
    <legend style={style} className={classes.pageTitle} {...rest}>
      {children}
    </legend>
  );
};