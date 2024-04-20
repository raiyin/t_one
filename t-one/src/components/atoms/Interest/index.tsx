import styles from './styles.module.css';

const Interest = (props: { text: string; }) => {
    return (
        <div className={styles['interest']}>
            {props.text}
        </div>
    );
};

export default Interest;
