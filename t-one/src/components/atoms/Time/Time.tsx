import styles from "./Time.module.css";

const Time = (props: { time: string }) => {
    return <div className={styles.time}>{props.time}</div>;
};

export default Time;
