import { HeroTextProps } from "../../../types/HeroTextProps";
import styles from "./HeroText.module.css";

const HeroText = (props: HeroTextProps) => {
    return <div className={styles["text"]}>{props.text}</div>;
};

export default HeroText;
