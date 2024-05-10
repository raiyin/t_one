import HeroImage from '@/components/molecules/HeroImage';
import HeroTextBlock from '@/components/molecules/HeroTextBlock';
import styles from './styles.module.css';

const HeroBlock = () => {
    return (
        <section className={styles['hero']}>
            <div className={styles['hero_container']}>
                <HeroTextBlock />
                <HeroImage />
            </div>
        </section>
    );
};

export default HeroBlock;
