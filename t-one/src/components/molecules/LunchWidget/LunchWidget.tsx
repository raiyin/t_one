import styles from './LunchWidget.module.css'
import Chicken_Image from "../../../assets/images/jpgs/chicken_king.jpg";
import Tag from '../../atoms/Tag/Tag';
import Text from '../../atoms/Text/Text';
import Time from '../../atoms/Time/Time';

const LunchWidget = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['image_wrapper']}>
                <img
                    src={Chicken_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
            </div>
            <Tag text={'Pizza'} />
            <Text content={'The Chiclen King'} color={'#323142'} fontSize={26} fontWeight={600} font={'Poppins'} />
            <Time time={'24min'} />

        </div>
    )
}

export default LunchWidget
