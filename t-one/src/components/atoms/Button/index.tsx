import ButtonType, { ButtonProps } from "@types/ButtonProps";
import styles from "./styles.module.css";
import ButtonImage_Forth from '@assets/images/svgs/btn_arrow_forth.svg';
import ButtonImage_Back from '@assets/images/svgs/btn_arrow_back.svg';
import { ArrowDirection } from "@types/ArrowProps";

const Button = (props: ButtonProps) => {

    const typeMap = (type: ButtonType): string => {
        const types = new Map<ButtonType, string>();
        types.set(ButtonType.Primary, styles.button__primary);
        types.set(ButtonType.Ghost, styles.button__ghost);
        return types.get(type) || "";
    };

    return (
        <button className={`${styles['button']} ${typeMap(props.type)} ${props.needArrow ? styles['button__iconed'] : ''}`} onClick={props.onClick}>

            {props.needArrow && props.direction === ArrowDirection.Back && <img className={styles['button_icon']} src={ButtonImage_Back} alt="" />}

            {props.text}

            {props.needArrow && props.direction === ArrowDirection.Forth && <img className={styles['button_icon']} src={ButtonImage_Forth} alt="" />}
        </button>
    );
};

export default Button;
