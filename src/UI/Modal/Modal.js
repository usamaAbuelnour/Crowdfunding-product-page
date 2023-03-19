import withStyle from '../../hoc/withStyle';
import classes from './Modal.scss';

function Modal(props) {
  const styles = [classes.modal];

  
  if(!props.modalIsVisible) styles.push(classes.close)
  if(!props.backThisProjectIsVisible) styles.push(classes.pledgeConfirm)

  return (
    <div className={styles.join(' ')} style={props.style}>
        {props.children}
    </div>
  )
}

export default withStyle(Modal);
