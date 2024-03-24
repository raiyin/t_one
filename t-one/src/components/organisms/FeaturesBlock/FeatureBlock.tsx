import FeatureItem from '../../molecules/FeatureItem/FeatureItem'
import styles from './FeatureBlock.module.css'
import Line_Image from "../../../assets/images/pngs/feature_line.png";
import featureJsonData from '../../../data/feature_data.json';
import { useState } from 'react';
import { FeatureProps } from '../../../types/FeatureProps';

const FeatureBlock = () => {


    const [featureData] = useState<FeatureProps[]>(featureJsonData['features']);

    return (
        <div className={styles.container}>
            <FeatureItem
                title={featureData[0].title}
                text={featureData[0].text}
            />
            <FeatureItem
                title={featureData[1].title}
                text={featureData[1].text}
            />
            <FeatureItem
                title={featureData[2].title}
                text={featureData[2].text}
            />
        </div>
    )
}

export default FeatureBlock
