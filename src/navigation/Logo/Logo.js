import classes from './Logo.scss';
import logo from '../../assets/logo.svg';

const Logo = () => (
    <div className={classes.logo}>
        <img src={logo} />
    </div>
);

export default Logo;