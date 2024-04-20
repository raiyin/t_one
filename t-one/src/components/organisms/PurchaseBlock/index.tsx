import PurchaseTextBlock from '@/components/molecules/PurchaseTextBlock';
import styles from './styles.module.css';

const PurchasesBlock = () => {
    return (
        <section className={styles['purchases_container']}>
            <PurchaseTextBlock />
            <div className={styles['purchases_image_wrapper']}>
                <img
                    src="@assets/images/webps/purchases.webp"
                    alt="purchases dashboard"
                    loading='lazy'
                    decoding='async'
                    className={styles['purchases_image']} />
            </div>
        </section>
    );
};

export default PurchasesBlock;
