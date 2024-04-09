import styles from "./Title.module.scss";
import { TitleProps as TitleProps } from "../../../types/TitleProps";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Title = (props: TitleProps) => {

    const titleClass = {
        title_font: true,
    }
    titleClass[('lh_' + props.lineHeight) as keyof typeof titleClass] = true
    titleClass[('fs_' + props.fontSize) as keyof typeof titleClass] = true
    titleClass[('fw_' + props.fontWeight) as keyof typeof titleClass] = true

    const className = cx(titleClass);

    return (
        <div className={className}>
            {props.text.slice(0, props.selectStart)}
            <span className="selected">
                {props.text.slice(props.selectStart, props.selectEnd)}
            </span>
            {props.text.slice(props.selectEnd)}
        </div>
    );
};

export default Title;
