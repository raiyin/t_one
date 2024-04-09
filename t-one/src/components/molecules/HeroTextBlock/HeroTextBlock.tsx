import ButtonType from "../../../types/ButtonProps";
import Button from "../../atoms/Button/Button";
import Title from "../../atoms/Title/Title";
import HeroText from "../../atoms/HeroText/HeroText";
import styles from "./HeroTextBlock.module.css";
import OverImage from '../../../assets/images/pngs/over_1000.png'
import { ArrowDirection } from "../../../types/ArrowProps";

const HeroTextBlock = () => {
    return (
        <section className={styles['hero_container']}>
            <Title
                text={"Enjoy\u00A0Foods\u00A0All Over\u00A0The\u00A0World"}
                selectStart={24}
                selectEnd={30}
                fontSize={76}
                fontWeight={600}
                lineHeight={91}
                hideOverflow={false}
            />

            <div className={styles["herotext-container"]}>
                <HeroText
                    text_main={
                        'EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early.'
                    }
                    text_bonus={'\u00a0Get a $20 bonus.'}
                />
            </div>

            <div className={styles["cta_buttons"]}>
                <Button
                    text={"Get Started"}
                    type={ButtonType.Primary}
                    needArrow={false}
                    onClick={() => { }}
                    direction={ArrowDirection.Back}
                />
                <Button
                    text={"Go Pro"}
                    type={ButtonType.Ghost}
                    needArrow={false}
                    onClick={() => { }}
                    direction={ArrowDirection.Back}
                />
            </div>

            <div className={styles['before_wrapper']}>
                <img src={OverImage} alt="" />
            </div>
        </section>
    );
};

export default HeroTextBlock;
