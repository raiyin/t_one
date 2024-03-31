import PurchaseTextBlock from '../../molecules/PurchaseTextBlock/PurchaseTextBlock'
import styles from './PurchasesBlock.module.css'

const PurchasesBlock = () => {
    return (
        <section className={styles['purchases_container']}>
            <PurchaseTextBlock />
            <div className={styles['purchases_image_wrapper']}>
                <img
                    src="../../../src/assets/images/webps/purchases.webp"
                    alt="purchases dashboard"
                    loading='lazy'
                    decoding='async'
                    className={styles['purchases_image']} />
            </div>
        </section>
    )
}

export default PurchasesBlock
