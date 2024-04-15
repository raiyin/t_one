import HeroImage from '@components/molecules/HeroImage/HeroImage';
import HeroTextBlock from '@components/molecules/HeroTextBlock/HeroTextBlock';
import styles from './HeroBlock.module.css';

const HeroBlock = () => {
    return (
        <div className={styles['hero']}>
            <HeroTextBlock />
            <HeroImage />
        </div>
    );
};

export default HeroBlock;
