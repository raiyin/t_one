import PurchaseTextBlock from '../../molecules/PurchaseTextBlock/PurchaseTextBlock'
import styles from './PurchasesBlock.module.css'
import PurchasesImage from '../../../assets/images/pngs/purchases.png'

const PurchasesBlock = () => {
    return (
        <div className={styles['purchases_container']}>
            <PurchaseTextBlock />
            <div className={styles['purchases_image_wrapper']}>
                <img src={PurchasesImage} alt="purchases dashboard" className={styles['purchases_image']} />
            </div>
        </div>
    )
}

export default PurchasesBlock
