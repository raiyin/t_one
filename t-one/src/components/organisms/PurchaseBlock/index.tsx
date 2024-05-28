import PurchaseTextBlock from '@/components/molecules/PurchaseTextBlock';
import styles from './styles.module.css';

const PurchasesBlock = () => {
    return (
        <section className={styles['purchases-container']}>
            <div className={styles['purchases']}>


                <div className={styles['purchases__text']}>
                    <PurchaseTextBlock />
                </div>

                <div className={styles['purchases__image']}>
                    <img
                        src="../../../src/assets/images/webps/purchases.webp"
                        alt="purchases dashboard"
                        loading='lazy'
                        decoding='async' />
                </div>
            </div>
        </section>
    );
};

export default PurchasesBlock;
