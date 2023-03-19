import classes from './ProgessBar.module.scss';
import { motion } from 'framer-motion';

export default function ProgessBar(props) {

  let oldTotalPercent = (props.oldTotal / props.target) * 100;
  let newTotalPercent = (props.newTotal / props.target) * 100;

  if(newTotalPercent > 100) newTotalPercent = 100 

  return (
    <div className={classes.progressBar}>

        <motion.div className={classes.bar} style={{width: `${oldTotalPercent}%`}}
        animate={{width: `${newTotalPercent}%`}} transition={{duration: 4}}>
        </motion.div>
    </div>
  )
}
