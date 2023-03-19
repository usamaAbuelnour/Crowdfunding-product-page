import classes from './BackDrop.scss';

export default function BackDrop(props) {
    const styles = [classes.backDrop];

    if(props.mobileMenuIsVisible) styles.push(classes.open);
    if(props.modalIsVisible) styles.push(classes.dark, classes.open)

  return <div className={styles.join(' ')} onClick={props.clicked}></div>
}
