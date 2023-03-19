import withStyle from '../../hoc/withStyle';
import AnimatedNumber from '../../UI/AnimatedNumber/AnimatedNumber';
import classes from './Statistics.scss';
import ProgressBar from '../../UI/ProgessBar/ProgessBar';


function Statistics(props) {
    return(
        <div className={classes.statistics} style={props.style}>
            <div>
                <AnimatedNumber from={props.oldStatistics.total} to={props.statistics.total > props.statistics.target ? props.statistics.target : props.statistics.total} />
                <span>${props.statistics.target.toLocaleString()} backed</span>
            </div>

            <hr/>

            <div>
                <AnimatedNumber from={props.oldStatistics.backers} to={props.statistics.backers} />
                <span>total backers</span>
            </div>

            <hr/>

            <div>
                <h1>{props.statistics.daysLeft.toLocaleString()}</h1>
                <span>days left</span>
            </div>

              <ProgressBar oldTotal={props.oldStatistics.total}
              newTotal={props.statistics.total} 
              target={props.statistics.target} />
        </div>
    );
}

export default withStyle(Statistics);