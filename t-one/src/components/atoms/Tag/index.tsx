import { TagProps } from '@/types/TagProps';
import styles from './styles.module.css';

const Tag = (props: TagProps) => {
    return (
        <div className={`${styles['tag']} ${styles[props.type]}`} >
            {props.text}
        </div >
    );
};

export default Tag;
