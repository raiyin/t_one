import styles from './LunchWidget.module.css'
import Chicken_Image from "../../../assets/images/jpgs/chicken_king.jpg";
import Tag from '../../atoms/Tag/Tag';
import Text from '../../atoms/Text/Text';
import Time from '../../atoms/Time/Time';
import Rating from '../../atoms/Rating/Rating';

const LunchWidget = () => {
    return (
        <div className={styles['container']}>

            <div className={styles['image_wrapper']}>
                <img
                    src={Chicken_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
            </div>

            <div className={styles['tag_wrapper']}>
                <Tag text={'Pizza'} />
            </div>

            <div className={styles['text_wrapper']}>
                <Text content={'The Chiclen King'} color={'#323142'} fontSize={26} fontWeight={600} font={'Poppins'} />
            </div>

            <div className={styles['info_wrapper']}>
                <Time time={'24min'} fontWeight={400} lineHeight={26} fontSize={20} />
                <Rating rating={'4.8'} />
            </div>

        </div>
    )
}

export default LunchWidget
