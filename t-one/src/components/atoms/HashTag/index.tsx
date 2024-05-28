import { HashTagsProps } from '@/types/HashTagsProps';
import styles from './styles.module.css';

const HashTag = (props: HashTagsProps) => {

    return (
        <div className={`${styles['hashtag']} ${styles['hashtag_' + props.size]}`}>
            {props.text}
        </div>
    );
};

export default HashTag;
