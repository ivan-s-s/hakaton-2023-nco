import classes from './Navbar.module.css';

export const Navbar = (props) => {
  const { title } = props;

  return <nav className={classes.title}>{title}</nav>;
};

export default Navbar;
