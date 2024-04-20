import { FeatureProps } from '@types/FeatureProps';
import styles from './styles.module.css';

const FeatureItem = (props: FeatureProps) => {
    return (
        <div className={styles['feature-item__wrapper']}>
            <div className={styles['feature-item']}>
                <div className={styles['feature-item__title']}>{props.title}</div>
                <div className={styles['feature-item__desc']}>{props.text}</div>
            </div>
        </div>
    );
};

export default FeatureItem;
