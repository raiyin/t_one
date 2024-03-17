import { HeroTextProps } from "../../../types/HeroTextProps";
import styles from "./HeroText.module.css";

const HeroText = (props: HeroTextProps) => {
    return <div className={styles["main_text"]}>
        {`${props.text_main}`}

        <div className={styles['bonus_text']}>
            {props.text_bonus}
        </div>
    </div>;
};

export default HeroText;
