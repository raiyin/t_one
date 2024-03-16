import PurchaseTextBlock from '../../molecules/PurchaseTextBlock/PurchaseTextBlock'
import styles from './PurchasesBlock.module.css'
import PurchasesImage from '../../../assets/images/pngs/purchases.png'

const PurchasesBlock = () => {
    return (
        <div className={styles['purchases_container']}>
            <PurchaseTextBlock />
            <div className={styles['purchases_image']}>
                <img src={PurchasesImage} alt="purchases dashboard" />
            </div>
        </div>
    )
}

export default PurchasesBlock
