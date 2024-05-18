import { TextProps } from "@/types/TextProps";
import styles from "./styles.module.css";

const Text = (props: TextProps) => {

    alert("This 'Text' component is not ready yet!");

    return (
        <div className={styles['content']}>
            {props.content}
        </div>);
};

export default Text;
