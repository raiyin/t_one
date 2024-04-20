import styles from './styles.module.css';
import SMIcon from '@/components/atoms/SmIcon';

const Socials = () => {
    return (
        <div className={styles['socials']}>
            <SMIcon sm_name="insta" />
            <SMIcon sm_name="linkedin" />
            <SMIcon sm_name="facebook" />
            <SMIcon sm_name="twitter" />
        </div>
    );
};

export default Socials;
