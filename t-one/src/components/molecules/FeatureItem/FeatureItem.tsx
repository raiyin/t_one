import { FeatureProps } from '../../../types/FeatureProps'
import styles from './FeatureItem.module.css'

const FeatureItem = (props: FeatureProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.desc}>{props.text}</div>
        </div>
    )
}

export default FeatureItem
