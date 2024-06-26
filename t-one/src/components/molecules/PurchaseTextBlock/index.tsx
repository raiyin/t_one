import Title from '@/components/atoms/Title';
import FoodWidget from '@/components/molecules/FoodWidget';
import styles from './styles.module.css';
import { TitleType } from '@/types/TitleProps';

const PurchaseTextBlock = () => {
    return (
        <div className={styles['purchase-text']}>
            <Title
                text={'Control\u00A0Purchases Via\u00A0Dashboard'}
                selectStart={8}
                selectEnd={17}
                titleType={TitleType.H2}
                hideOverflow={false}
            />
            <ul className={styles['purchase-text__items']}>
                <li>
                    <FoodWidget
                        title={'Chicken Hell'}
                        status={'On The Way'}
                        time={'3:09 PM'}
                        img_url={'../../../src/assets/images/pngs/food_image_1.png'}
                        img_alt={'Chicken hell'}
                        selected
                    />
                </li>
                <li>
                    <FoodWidget
                        title={'Swe Dish'}
                        status={'Delivered'}
                        time={'Yesterday'}
                        img_url={'../../../src/assets/images/pngs/food_image_2.png'}
                        img_alt={'Swe Dish'}
                        selected={false}
                    />
                </li>
                <li>
                    <FoodWidget
                        title={'Fish Hell Veg'}
                        status={'Cancelled'}
                        time={'Yesterday'}
                        img_url={'../../../src/assets/images/pngs/food_image_3.png'}
                        img_alt={'Swe Dish'}
                        selected={false}
                    />
                </li>
            </ul>
        </div>
    );
};

export default PurchaseTextBlock;
