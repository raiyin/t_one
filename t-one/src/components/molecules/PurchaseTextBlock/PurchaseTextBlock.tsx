import H1Title from '../../atoms/H1Title/H1Title'
import FoodWidget from '../FoodWidget/FoodWidget'
import styles from './Purchase.module.css'

const PurchaseTextBlock = () => {
    return (
        <div className={styles['purchase_text-block']}>
            <H1Title text={'Control\u00A0Purchases Via\u00A0Dashboard'} selectStart={8} selectEnd={17} />
            <ul className={styles['purchase_text-items']}>
                <li>
                    <FoodWidget
                        title={'Chicken Hell'}
                        status={'On The Way'}
                        time={'3:09 PM'}
                        img_url={'../../../src/assets/images/pngs/food_image_1.png'}
                        img_alt={'Chicken hell'}
                    />
                </li>
                <li>
                    <FoodWidget
                        title={'Swe Dish'}
                        status={'Delivered'}
                        time={'Yesterday'}
                        img_url={'../../../src/assets/images/pngs/food_image_2.png'}
                        img_alt={'Swe Dish'}
                    />
                </li>
                <li>
                    <FoodWidget
                        title={'Fish Hell Veg'}
                        status={'Cancelled'}
                        time={'Yesterday'}
                        img_url={'../../../src/assets/images/pngs/food_image_3.png'}
                        img_alt={'Swe Dish'}
                    />
                </li>
            </ul>
        </div>
    )
}

export default PurchaseTextBlock
