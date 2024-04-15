import AppTextBlock from '@components/molecules/AppTextBlock/AppTextBlock';
import styles from './AppBlock.module.css';

const AppBlock = () => {
    return (
        <section className={styles['app_block']}>
            <div className={styles['images']}>

                <div className={styles['images_phone']}>
                    <img
                        src="../../../src/assets/images/webps/mobile_phone.webp"
                        alt="Image of the our app on iPhone"
                        loading='lazy'
                        decoding='async'
                    />
                </div>
            </div>
            <AppTextBlock />
        </section>
    );
};

export default AppBlock;
