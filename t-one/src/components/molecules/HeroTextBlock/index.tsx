import ButtonType from "@types/ButtonProps";
import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";
import HeroText from "@/components/atoms/HeroText";
import styles from "./styles.module.css";
import OverImage from '@assets/images/pngs/over_1000.png';
import { ArrowDirection } from "@types/ArrowProps";
import { TitleType } from "@/types/TitleProps";

const HeroTextBlock = () => {
    return (
        <div className={styles['hero_container']}>
            <Title
                text={"Enjoy\u00A0Foods\u00A0All Over\u00A0The\u00A0World"}
                selectStart={24}
                selectEnd={30}
                titleType={TitleType.H1}
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
        </div>
    );
};

export default HeroTextBlock;
