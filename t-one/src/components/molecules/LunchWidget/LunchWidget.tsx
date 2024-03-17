import styles from './LunchWidget.module.css'
import Chicken_Image from "../../../assets/images/jpgs/chicken_king.jpg";
import Tag from '../../atoms/Tag/Tag';
import Text from '../../atoms/Text/Text';
import Time from '../../atoms/Time/Time';
import Rating from '../../atoms/Rating/Rating';
import Title from '../../atoms/Title/Title';

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
                <Title
                    text={'The Chiclen King'}
                    selectStart={0}
                    selectEnd={0}
                    fontSize={26}
                    fontWeight={600}
                    lineHeight={42}
                />
            </div>

            <div className={styles['info_wrapper']}>
                <Time time={'24min'} fontWeight={400} lineHeight={26} fontSize={20} />
                <Rating rating={'4.8'} />
            </div>

        </div>
    )
}

export default LunchWidget
