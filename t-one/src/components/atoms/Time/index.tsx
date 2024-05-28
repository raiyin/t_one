import styles from "./styles.module.scss";
import { TimeProps, TimeType } from "@/types/TimeProps";

const Time = (props: TimeProps) => {

    return (
        <time className={props.timeType == TimeType.small ? styles['time_small'] : styles['time_medium']}>
            {props.time}
        </time >);
};

export default Time;
