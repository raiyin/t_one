import FeatureItem from '../../molecules/FeatureItem/FeatureItem'
import styles from './FeatureBlock.module.css'
import Line_Image from "../../../assets/images/pngs/feature_line.png";

const FeatureBlock = () => {
    return (
        <div className={styles.container}>
            <FeatureItem />
            <img
                src={Line_Image}
                alt="Grapefruit slice atop a pile of other slices"
            />
            <FeatureItem />
            <img
                src={Line_Image}
                alt="Grapefruit slice atop a pile of other slices"
            />
            <FeatureItem />
        </div>
    )
}

export default FeatureBlock
