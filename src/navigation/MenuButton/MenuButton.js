import classes from './MenuButton.scss';
import menuIcon from '../../assets/icon-hamburger.svg';
import menuCloseIcon from '../../assets/icon-close-menu.svg';

export default function MenuButton(props) {
  const styles = [classes.menuButton];
  if(props.modalIsVisible) styles.push(classes.disable)
  return (
    <div className={styles.join(' ')}>
        
        <img src={props.mobileMenuIsVisible ? menuCloseIcon : menuIcon}
         onClick={props.mobileMenuIsVisible ? props.closeMobileMenu : props.openMobileMenu } />
    </div>
  )
}
