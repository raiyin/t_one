import styles from "./H1Title.module.css";
import { H1TitleProps } from "../../../types/H1TitleProps";

const H1Title = (props: H1TitleProps) => {
    return (
        <h1 className={styles.title}>
            {props.text.slice(0, props.selectStart)}
            <span className="selected">
                {props.text.slice(props.selectStart, props.selectEnd)}
            </span>
            {props.text.slice(props.selectEnd)}
        </h1>
    );
};

export default H1Title;
