import styles from "./styles.module.css";
import Waves_Image from "@assets/images/svgs/waves.svg";
import Arrow_Image from "@assets/images/svgs/arrow.svg";
import Rays_Image from "@assets/images/svgs/rays.svg";
import FoodWidget from "@/components/molecules/FoodWidget";

const HeroImage = () => {
    return (
        <div className={styles['hero-image']}>
            <div className={styles['hero-image__container']}>

                <div className={styles["hero-image__waves"]}>
                    <img
                        src={Waves_Image}
                        alt=""
                    />
                </div>

                <div className={styles["hero-image__widget-wrapper"]}>
                    <FoodWidget
                        title={'Chicken Hell'}
                        status={'On The Way'}
                        time={'3:09 PM'}
                        img_url={'../../../src/assets/images/pngs/food_image_1.png'}
                        img_alt={'Chicken hell'}
                        selected />
                </div>

                <figure className={styles["hero_image__image"]}>
                    <img
                        src="../../../src/assets/images/webps/hero_food_image.webp"
                        srcSet="
                    ../../../src/assets/images/webps/hero_food_image-small.webp 320w,
                    ../../../src/assets/images/webps/hero_food_image-medium.webp 480w,
                    ../../../src/assets/images/webps/hero_food_image-large.webp 800w"
                        sizes="
                        (max-width:320px) 280px,
                        (max-width:480px) 440px,
                        800px"

                        alt="Our main food"
                    />
                </figure>

                <div className={styles["hero_image__mask"]}></div>

                <div className={styles["hero-image__arrow"]}>
                    <img
                        src={Arrow_Image}
                        alt=""
                    />
                </div>


                <div className={styles["hero-image__graph"]}>
                    <img
                        src="../../../src/assets/images/webps/hero_graph.webp"
                        alt="Example of our app"
                    />
                </div>

                <div className={styles["hero-image__rays"]}>
                    <img
                        src={Rays_Image}
                        alt=""
                    />
                </div>

            </div>

        </div>
    );
};

export default HeroImage;
