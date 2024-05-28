import styles from './styles.module.css';

const Money = (props: { price: string; }) => {
    return (
        <div className={styles['money']}>
            {props.price}
        </div>
    );
};

export default Money;
