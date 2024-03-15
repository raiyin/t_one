import ButtonType from "../../../types/ButtonProps";
import Button from "../../atoms/Button/Button";
import H1Title from "../../atoms/H1Title/H1Title";
import HeroText from "../../atoms/HeroText/HeroText";
import styles from "./HeroTextBlock.module.css";

const HeroTextBlock = () => {
    return (
        <div className={styles.container}>
            <H1Title
                text={"Enjoy\u00A0Foods\u00A0All Over\u00A0The\u00A0World"}
                selectStart={24}
                selectEnd={30}
            />

            <div className={styles["herotext-container"]}>
                <HeroText
                    text={
                        "EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus."
                    }
                />
            </div>

            <div className={styles["cta_buttons"]}>
                <Button text={"Get Started"} type={ButtonType.Primary} />
                <Button text={"Go Pro"} type={ButtonType.Ghost} />
            </div>
        </div>
    );
};

export default HeroTextBlock;
