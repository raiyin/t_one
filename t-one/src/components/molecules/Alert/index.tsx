import { AlertProps, AlertType } from '@/types/AlertProps';
import styles from './styles.module.css';
import SuccesIcon from '@assets/images/svgs/success.svg';
import InfoIcon from '@assets/images/svgs/information.svg';
import WarningIcon from '@assets/images/svgs/warning.svg';
import CloseIcon from '@assets/images/svgs/close.svg';
import ErrorIcon from '@assets/images/svgs/error.svg';
import Title from '@/components/atoms/Title';
import { TitleType } from '@/types/TitleProps';
import { Capitalize } from '@/utils/strings';

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
            <div className={`${styles['alert']} ${styles['alert_' + AlertType[props.type]]} ${props.show && styles['alert_visible']} `}>
                <div className={styles['alert__card']}>
                    <div className={styles['alert__icon']}>
                        <img src={ChooseIcon(props.type)} />
                    </div>
                    <div className={styles['alert__subject']}>
                        <Title
                            text={Capitalize(AlertType[props.type])}
                            titleType={TitleType.H4}
                            hideOverflow={false}
                            selectStart={0}
                            selectEnd={0}
                        />
                        <p>{props.text}</p>
                    </div>
                    <div className={styles['alert__icon-times']} onClick={() => props.setShow(false)}>
                        <img src={CloseIcon} />
                    </div>
                </div>
            </div>
        );
};

export default Alert;
