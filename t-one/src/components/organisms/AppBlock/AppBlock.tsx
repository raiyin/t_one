import AppTextBlock from '../../molecules/AppTextBlock/AppTextBlock'
import styles from './AppBlock.module.css'
import Phone_Image from "../../../assets/images/pngs/mobile_phone.png";
import PhoneRays_Image from "../../../assets/images/svgs/phone_rays.svg";

const AppBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles['images']}>

                <div className={styles['images_phone']}>
                    <img
                        src={Phone_Image}
                        alt="Grapefruit slice atop a pile of other slices"
                    />
                </div>
                <div className={styles['images_rays']}>
                    <img
                        src={PhoneRays_Image}
                        alt="Grapefruit slice atop a pile of other slices"
                    />
                </div>
            </div>
            <AppTextBlock />
        </div>
    )
}

export default AppBlock
