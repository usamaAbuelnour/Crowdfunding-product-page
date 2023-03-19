
import {useSpring, animated} from 'react-spring';

export default function AnimatedNumber({from, to}) {
    const {number} = useSpring({
        from: {number: from},
        number: to,
        delay: 0,
        config: {mass: 1, tension: 20, friction: 10}
    });

    return <animated.h1>{number.to(n => n.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }))}
    </animated.h1>
}