import styles from "./Time.module.scss";
import { TimeProps } from "../../../types/TimeProps";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Time = (props: TimeProps) => {

    const timeClass = {
        time: true,
    }
    timeClass[('lh_' + props.lineHeight) as keyof typeof timeClass] = true
    timeClass[('fs_' + props.fontSize) as keyof typeof timeClass] = true
    timeClass[('fw_' + props.fontWeight) as keyof typeof timeClass] = true

    const className = cx(timeClass);

    return <div className={className}>{props.time}</div>;
};

export default Time;
