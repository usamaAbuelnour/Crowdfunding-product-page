import classes from './Project.scss';
import masterLogo from '../../assets/logo-mastercraft.svg';
import withStyle from '../../hoc/withStyle';
import Button from '../../UI/Button/Button';


function Project(props) {
  return (
    <div className={classes.project} style={props.style} >

        <div className={classes.masterLogo}><img src={masterLogo} alt='masterLogo' /></div>
        <h2>Mastercraft Bamboo Monitor Riser</h2>
        <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
        
        <div className={classes.buttonGroup} id="project">
          
          <Button clicked={props.openModal} link='container'>Back this project</Button>
          <Button bookMark={true} bookMarked={props.bookMarked} clicked={props.toggleBookMark}></Button>
          
        </div>

    </div>
  )
}

export default withStyle(Project);