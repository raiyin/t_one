import AppTextBlock from '@/components/molecules/AppTextBlock';
import styles from './styles.module.css';

const AppBlock = () => {
    return (
        <section className={styles['app-block']}>
            <div className={styles['app-block__container']}>

                <div className={styles['app-block__images']}>

                    <div className={styles['app-block__image']}>
                        <img
                            src="../../../src/assets/images/webps/mobile_phone.webp"
                            alt="Image of the our app on iPhone"
                            loading='lazy'
                            decoding='async'
                        />
                    </div>
                </div>

                <AppTextBlock />

            </div>

        </section>
    );
};

export default AppBlock;
