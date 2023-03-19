import Reward from '../Reward/Reward';
import classes from './BackThisProject.scss';
import IconCloseModal from '../../UI/SVGs/IconCloseModal/IconCloseModal';

export default function BackThisProject(props) {

    const styles = [classes.backThisProject];

    if(!props.backThisProjectIsVisible) styles.push(classes.close)
    


  return (
    <div className={styles.join(' ')}>
        <header>

            <h2>Back this project</h2>
            <IconCloseModal clicked={props.closeModal} />
        </header>

        <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world ?
        </p>

        
        {
            props.rewards.map(reward=><Reward key={Math.random()}
             reward={reward}    modal outOfStock={reward.stock ? false :true}
             setRewards={props.setRewards} rewards={props.rewards}
             closeBackThisProject={props.closeBackThisProject}/>)
        }

    </div>
  )
}
