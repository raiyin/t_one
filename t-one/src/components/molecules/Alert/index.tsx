import { AlertProps, AlertType } from '@/types/AlertProps';
import styles from './styles.module.css';
import SuccesIcon from '@assets/images/svgs/success.svg';
import InfoIcon from '@assets/images/svgs/information.svg';
import WarningIcon from '@assets/images/svgs/warning.svg';
import CloseIcon from '@assets/images/svgs/close.svg';
import ErrorIcon from '@assets/images/svgs/error.svg';

function ChooseIcon(type: AlertType) {
    if (type === AlertType.success) {
        return SuccesIcon;
    }
    else if (type === AlertType.info) {
        return InfoIcon;
    }
    else if (type === AlertType.warning) {
        return WarningIcon;
    }
    else {
        return ErrorIcon;
    }
}

const Alert = (props: AlertProps) => {

    if (props.show)
        return (
            <div className={`${styles['alert']} ${styles['alert__' + AlertType[props.type]]} ${props.show && styles['alert__visible']} `}>
                <div className={styles['card']}>
                    <div className={styles['icon']}>
                        <img src={ChooseIcon(props.type)} />
                    </div>
                    <div className={styles['subject']}>
                        <h3>{AlertType[props.type]}</h3>
                        <p>{props.text}</p>
                    </div>
                    <div className={styles['icon-times']} onClick={() => props.setShow(false)}>
                        <img src={CloseIcon} />
                    </div>
                </div>
            </div>
        );
};

export default Alert;
