import { useContext, useRef } from "react";
import withStyle from "../../hoc/withStyle";
import Button from "../../UI/Button/Button";
import classes from "./Reward.scss";
import { PriceContext } from "../../App";

function Reward(props) {
  const styles = [classes.reward];

  const radioStyles = [classes.checkMark];

  const textField = useRef();

  const price = useContext(PriceContext);

  const selectReward = (reward) => {
    let index = props.rewards.findIndex(
      (myReward) => myReward.type === reward.type
    );
    const rewardsClone = JSON.parse(JSON.stringify(props.rewards));
    rewardsClone.map((reward) => (reward.selected = false));
    rewardsClone[index].selected = true;
    props.setRewards(rewardsClone);
  };

  const validate = () => {
    if (props.reward.noReward) {
      if (textField.current.value > 0) {
        price.current = textField.current.value * 1;
        props.closeBackThisProject();
      }
    } else {
      if (textField.current.value >= props.reward.pledgePrice) {
        price.current = textField.current.value * 1;
        props.closeBackThisProject();
      }
    }
  };

  if (props.outOfStock) styles.push(classes.outOfStock);

  if (props.reward.selected && props.modal) {
    styles.push(classes.selected);
    radioStyles.push(classes.active);
  }

  const getPreviousReward = (current) => {
    let index = props.rewards.findIndex(
      (reward) => reward.type == current.type
    );

    return props.rewards[index - 1].type;
  };

  return (
    <div
      className={styles.join(" ")}
      style={props.style}
      
    >
      {props.modal ? (
        <>
          <div className={classes.rewardHeader}>
            <div
              className={classes.radioButton}
              onClick={selectReward.bind(this, props.reward)}
            >
              <div className={radioStyles.join(" ")}></div>
            </div>

            <div className={classes.headings}>
              <h4
                className={classes.type}
                onClick={selectReward.bind(this, props.reward)}
              >
                {props.reward.type}
              </h4>
              {props.reward.pledgePrice !== "none" && !props.reward.noReward ? (
                <h4 className={classes.price}>
                  Pledge ${props.reward.pledgePrice} or more
                </h4>
              ) : null}

              {props.reward.noReward ? null : (
                <div
                  className={[
                    classes.stock,
                    classes.marginLeft,
                    classes.hidee,
                  ].join(" ")}
                >
                  <h1>{props.reward.stock}</h1>
                  <span>left</span>
                </div>
              )}
            </div>
          </div>

          <p>{props.reward.description}</p>

          {props.reward.pledgePrice ? (
            <div className={[classes.stock, classes.hide].join(" ")}>
              <h1>{props.reward.stock}</h1>
              <span>left</span>
            </div>
          ) : null}
          <div className='anchor'  id={props.modal ? props.reward.type : null}></div>

          {props.reward.selected ? (
            <div className={classes.footer}>
              <p>Enter your pledge</p>

              <div className={classes.controlls}>
                <div className={classes.textField}>
                  <label>$</label>
                  <input
                    type="text"
                    defaultValue={props.reward.pledgePrice}
                    ref={textField}
                  />
                </div>

                <Button clicked={validate} link="scrollUp" continue>
                  Continue
                </Button>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className={[classes.headings, classes.spaceBetween].join(" ")}>
            <h4>{props.reward.type}</h4>

            <h4 className={classes.price}>
              Pledge ${props.reward.pledgePrice} or more
            </h4>
          </div>

          <p>{props.reward.description}</p>

          <div className={classes.bottomSection}>
            <div className={classes.stock}>
              <h1>{props.reward.stock}</h1>
              <span>left</span>
            </div>

            {props.outOfStock ? (
              <Button reward disabled>
                Out of Stock
              </Button>
            ) : (
              <Button
                reward
                clicked={() => {
                  props.openModal();
                  selectReward(props.reward);
                }}
                link={getPreviousReward(props.reward)}
              >
                Select Reward
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default withStyle(Reward);
