import FeatureItem from '@/components/molecules/FeatureItem';
import styles from './FeatureBlock.module.css';
import { FeatureProps } from '@types/FeatureProps';

const FeatureBlock = (props: { features: FeatureProps[]; }) => {

    return (
        <div className={styles['features']}>
            {
                props.features.map(item => (
                    <FeatureItem
                        title={item.title}
                        text={item.text}
                        key={item.title}
                    />
                ))
            }
        </div>
    );
};

export default FeatureBlock;
