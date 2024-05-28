import styles from './styles.module.css';
import { helix } from 'ldrs';

helix.register();

const LoadingBlock = () => {
    return (
        <div className={styles['loading-block']}>
            <l-helix size="150" speed="2.5" color="black" />
        </div>
    );
};

export default LoadingBlock;
