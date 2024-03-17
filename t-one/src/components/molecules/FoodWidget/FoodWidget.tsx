import Time from "../../atoms/Time/Time";
import styles from "./FoodWidget.module.css";
import { FoodWidgetProps } from "../../../types/FoodWidgetProps";

const FoodWidget = (props: FoodWidgetProps) => {
    return (
        <div className={`${styles.food_widget_container} ${props.selected && styles.selected}`}>
            <div className={styles.image}>
                <img
                    src={props.img_url}
                    alt={props.img_alt}
                />
            </div>
            <div className={styles["info_block"]}>
                <div className={styles["info_block__title"]}>{props.title}</div>
                <div className={styles["info_block__desc"]}>{props.status}</div>
            </div>
            <div className={styles.time}>
                <Time time={props.time} fontWeight={500} fontSize={10} lineHeight={14} />
            </div>
        </div>
    );
};

export default FoodWidget;
