import classes from './NavItems.scss';


export default function NavItems(props) {
  const styles = [classes.navItems];
  if(props.modalIsVisible) styles.push(classes.disable)
  return (
    <nav className={styles.join(' ')}>
        <a href=''>About</a>
        <a href=''>Discover</a>
        <a href=''>Get Started</a>
    </nav>
  )
}
