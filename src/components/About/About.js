import withStyle from '../../hoc/withStyle';
import Reward from '../Reward/Reward';
import classes from './About.scss';

function About(props) {
  return (
    <div className={classes.about} style={props.style}>
        <h3>About this project</h3>
        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
            that elevates your screen to a more comfortable viewing height. Placing
            your monitor at eye level has the potential to improve your posture and
            make you more comfortable while at work, helping you stay focused on the
            desk at hand.
        </p>
        <p>
            Featuring artisan craftsmanship, the simplicity of design creates extra desk
            space below your computer to allow notepads, pens, and USB sticks to be stored
            under the stand.
        </p>

        {
            props.rewards.map(reward=>{
              if(reward.noReward) return null;
              else  return <Reward key={Math.random()} reward={reward} outOfStock={reward.stock ? false :true}  
              openModal={props.openModal} setRewards={props.setRewards} rewards={props.rewards}/>
          })
        }

    </div>
  )
}

export default withStyle(About);