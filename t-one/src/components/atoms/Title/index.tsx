import styles from "./styles.module.scss";
import { TitleProps as TitleProps } from "@types/TitleProps";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Title = ({ text = '', selectStart = 0, selectEnd = 0, lineHeight = 20, fontSize = 16, fontWeight = 400, hideOverflow = true }: TitleProps) => {

    const titleClass = {
        title_font: true,
    };
    titleClass[('lh_' + lineHeight) as keyof typeof titleClass] = true;
    titleClass[('fs_' + fontSize) as keyof typeof titleClass] = true;
    titleClass[('fw_' + fontWeight) as keyof typeof titleClass] = true;
    titleClass[('title_overflow') as keyof typeof titleClass] = hideOverflow;

    const className = cx(titleClass);

    return (
        <div className={className}>
            {text.slice(0, selectStart)}
            <span className="selected">
                {text.slice(selectStart, selectEnd)}
            </span>
            {text.slice(selectEnd)}
        </div>
    );
};

export default Title;
