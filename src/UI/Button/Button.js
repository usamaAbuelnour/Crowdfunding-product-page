import classes from './Button.scss';
import IconBookMark from '../SVGs/IconBookMark/IconBookMark';


export default function Button(props) {

    const styles = [classes.button];

    if(props.bookMark) styles.push(classes.bookMark);
    if(props.reward) styles.push(classes.reward);
    if(props.disabled) styles.push(classes.disabled)
    if(props.continue) styles.push(classes.continue)

  return (
    <div className={styles.join(' ')} onClick={props.clicked}>
        
        {
          props.bookMark ?
            <div className={classes.bookmarkContainer}>

              {
                props.bookMarked ?
                  <>
                    <IconBookMark foreground='#fff' background='var(--dark-cyan)'/>
                    <div style={{color: '#3cb4ac' }}>Bookmarked</div>
                  </>
                  
                :
                  <>
                    <IconBookMark foreground='#b1b1b1' background='#2f2f2f' />
                    <div>Bookmark</div>
                  </>
              }

            </div>

          : props.link ?

            <a href={`#${props.link}`}>  {props.children} </a>

          :
            <div>{props.children}</div>
        }

    </div>
  )
}
