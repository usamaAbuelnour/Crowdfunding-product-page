import classes from './PledgeConfirm.scss';
import Button from '../../UI/Button/Button';
import IconCheck from '../../UI/SVGs/IconCheck/IconCheck';

export default function PledgeConfirm(props) {

  const setNewStatistics = () =>{

    props.closeModal();

    props.setStatistics(prev=>({...prev, total: prev.total + props.price.current, backers: prev.backers + 1}));

  }

  return (
    <div className={classes.pledgeConfirm} id='pledgeConfirm'>
        <IconCheck />
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <Button clicked={setNewStatistics} link='project'>Got it !</Button>
    </div>
  )
}
