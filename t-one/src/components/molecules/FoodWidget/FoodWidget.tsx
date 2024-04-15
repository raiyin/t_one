import Time from "@components/atoms/Time/Time";
import styles from "./FoodWidget.module.css";
import { FoodWidgetProps } from "@types/FoodWidgetProps";

const FoodWidget = (props: FoodWidgetProps) => {
    return (
        <div className={`${styles.food_widget_container} ${props.selected && styles.selected}`}>
            <figure className={styles.image}>
                <img
                    src={props.img_url}
                    alt={props.img_alt}
                />
            </figure>
            <div className={styles["info_block"]}>
                <div className={styles["info_block__title"]}>{props.title}</div>
                <div className={styles["info_block__desc"]}>{props.status}</div>
            </div>
            <div className={styles.time}>
                <Time
                    time={props.time}
                    fontWeight={500}
                    fontSize={10}
                    lineHeight={14}
                    font={'poppins'}
                />
            </div>
        </div>
    );
};

export default FoodWidget;
