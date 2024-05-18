import styles from "./styles.module.scss";
import { TimeProps, TimeType } from "@/types/TimeProps";

const Time = (props: TimeProps) => {

    return (
        <time className={props.timeType == TimeType.small ? styles['small'] : styles['medium']}>
            {props.time}
        </time >);
};

export default Time;
