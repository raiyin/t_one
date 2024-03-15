import Time from "../../atoms/Time/Time";
import styles from "./FoodWidget.module.css";
import FI_Image from "../../../assets/images/pngs/food_image_1.png";

const FoodWidget = () => {
    return (
        <div className={`${styles.container} ${styles.selected}`}>
            <div className={styles.image}>
                <img
                    src={FI_Image}
                    alt="Grapefruit slice atop a pile of other slices"
                />
            </div>
            <div className={styles["info_block"]}>
                <div className={styles["info_block__title"]}>Chicken Hell</div>
                <div className={styles["info_block__desc"]}>On The Way</div>
            </div>
            <div className={styles.time}>
                <Time time={"3:09 PM"} />
            </div>
        </div>
    );
};

export default FoodWidget;
