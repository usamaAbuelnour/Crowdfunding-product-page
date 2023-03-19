import Logo from '../Logo/Logo';
import MenuButton from '../MenuButton/MenuButton';
import NavItems from '../NavItems/NavItems';
import classes from './ToolBar.scss';


export default function ToolBar(props) {
  return (
    <div className={classes.toolBar}>
        <Logo />
        <MenuButton openMobileMenu={props.openMobileMenu}
        closeMobileMenu={props.closeMobileMenu}
        mobileMenuIsVisible={props.mobileMenuIsVisible}
        modalIsVisible={props.modalIsVisible}/>

        <div className={[classes.navBar, classes.hide].join(' ')}>
          <NavItems modalIsVisible={props.modalIsVisible}/>
        </div>
        {/* <NavItems /> */}
    </div>
  )
}
