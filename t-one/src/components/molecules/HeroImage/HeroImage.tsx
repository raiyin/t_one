import styles from "./HeroImage.module.css";
import Waves_Image from "../../../assets/images/svgs/waves.svg";
import Arrow_Image from "../../../assets/images/svgs/arrow.svg";
import Rays_Image from "../../../assets/images/svgs/rays.svg";
import HeroFood_Image from "../../../assets/images/pngs/hero_food_image.png";
import HeroGraph_Image from "../../../assets/images/pngs/hero_graph.png";
import FoodWidget from "../FoodWidget/FoodWidget";

const HeroImage = () => {
    return (
        <div className={styles.container}>
            <div className={styles["waves_wrapper"]}>
                <img
                    src={Waves_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
            </div>
            <div className={styles["widget_wrapper"]}>
                <FoodWidget
                    title={'Chicken Hell'}
                    status={'On The Way'}
                    time={'3:09 PM'}
                    img_url={'../../../src/assets/images/pngs/food_image_1.png'}
                    img_alt={'Chicken hell'}
                    selected />
            </div>
            <div className={styles["hero_image_wrapper"]}>
                <img
                    src={HeroFood_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
                <div className={styles["arrow_wrapper"]}>
                    <img
                        src={Arrow_Image}
                        alt="Grapefruit slice atop a pile of other slices"
                    />
                </div>
                <div className={styles["hero_image__mask"]}></div>
            </div>
            <div className={styles["graph_wrapper"]}>
                <img
                    src={HeroGraph_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
            </div>
            <div className={styles["rays_wrapper"]}>
                <img
                    src={Rays_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
            </div>
        </div>
    );
};

export default HeroImage;
