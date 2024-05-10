import FeatureItem from '@/components/molecules/FeatureItem';
import styles from './styles.module.css';
import { FeatureProps } from '@types/FeatureProps';

const FeatureBlock = (props: { features: FeatureProps[]; }) => {

    return (
        <section className={styles['features']}>
            {
                props.features.map(item => (
                    <FeatureItem
                        title={item.title}
                        text={item.text}
                        key={item.title}
                    />
                ))
            }
        </section>
    );
};

export default FeatureBlock;
