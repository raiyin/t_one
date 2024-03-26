import { HashTagsProps } from '../../../types/HashTagsProps';
import styles from './HashTag.module.css'

const HashTag = (props: HashTagsProps) => {

    return (
        <div className={`${styles['hashtag']} ${styles['hashtag__' + props.size]}`}>
            {props.text}
        </div>
    )
}

export default HashTag
