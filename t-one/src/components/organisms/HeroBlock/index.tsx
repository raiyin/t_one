import HeroImage from '@/components/molecules/HeroImage';
import HeroTextBlock from '@/components/molecules/HeroTextBlock';
import styles from './styles.module.css';

const HeroBlock = () => {
    return (
        <div className={styles['hero']}>
            <HeroTextBlock />
            <HeroImage />
        </div>
    );
};

export default HeroBlock;
