import { TextProps } from "../../../types/TextProps";
import styles from "./Text.module.css";

const Text = (props: TextProps) => {
    return (
        <div className={styles['content']}>
            {props.content}
        </div>)
};

export default Text;
