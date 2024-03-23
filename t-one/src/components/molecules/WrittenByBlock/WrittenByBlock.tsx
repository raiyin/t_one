import styles from './WrittenByBlock.module.css'
import { WrittenByProps } from '../../../types/WrittenByProps'

const WrittenByBlock = (props: WrittenByProps) => {
    return (
        <div className={styles['written-by']}>
            <div className={styles['written-by_ava']}>
                <img src={props.ava_url} alt="author avatar" />
            </div>
            <div className={styles['written-by_author']}>
                <div className={styles['written-by_label']}>
                    Written By
                </div>
                <div className={styles['written-by_name']}>
                    {props.author}
                </div>
            </div>

        </div>
    )
}

export default WrittenByBlock
