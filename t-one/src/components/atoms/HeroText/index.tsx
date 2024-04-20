import { HeroTextProps } from "@types/HeroTextProps";
import styles from "./styles.module.css";

const HeroText = (props: HeroTextProps) => {
    return (
        <div className={styles["main-text"]}>
            {`${props.text_main} `}

            <div className={styles['main-text_bonus']}>
                {props.text_bonus}
            </div>
        </div>
    );
};

export default HeroText;
