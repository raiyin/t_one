import ButtonType, { ButtonProps } from "../../../types/ButtonProps";
import styles from "./Button.module.css";
import ButtonImage from '../../../assets/images/pngs/btn_arrow.png'

const Button = (props: ButtonProps) => {
    const typeMap = (type: ButtonType): string => {
        const types = new Map<ButtonType, string>();
        types.set(ButtonType.Primary, styles.button__primary);
        types.set(ButtonType.Secondary, styles.button__secondary);
        types.set(ButtonType.Ghost, styles.button__ghost);
        return types.get(type) || "";
    };

    return (
        <button className={`${styles['button']} ${typeMap(props.type)}`}>
            {props.text}
            {props.needArrow && <img className={styles['btn_icon']} src={ButtonImage} alt="" />}
        </button>
    );
};

export default Button;
