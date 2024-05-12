import styles from "./styles.module.scss";
import { TimeProps, TimeType } from "@types/TimeProps";
import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

const Time = (props: TimeProps) => {

    // const timeClass = {
    //     time: true,
    // };
    // timeClass[('lh_' + props.lineHeight) as keyof typeof timeClass] = true;
    // timeClass[('fs_' + props.fontSize) as keyof typeof timeClass] = true;
    // timeClass[('fw_' + props.fontWeight) as keyof typeof timeClass] = true;
    // timeClass[('font_' + props.font) as keyof typeof timeClass] = true;

    // const className = cx(timeClass);

    return (
        <time className={props.timeType == TimeType.small ? styles['small'] : styles['medium']}>
            {props.time}
        </time >);
};

export default Time;
