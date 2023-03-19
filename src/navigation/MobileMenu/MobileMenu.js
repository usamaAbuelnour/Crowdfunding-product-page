import NavItems from '../NavItems/NavItems';
import classes from './MobileMenu.scss';

export default function MobileMenu(props) {
    
    const styles = [classes.mobileMenu];

    if(props.mobileMenuIsVisible) styles.push(classes.open) 
  
    return (
    <div className={styles.join(' ')}>
        <NavItems />
    </div>
  )
}
