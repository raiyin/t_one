import Time from "@/components/atoms/Time";
import styles from "./styles.module.css";
import { FoodWidgetProps } from "@/types/FoodWidgetProps";
import { TimeType } from "@/types/TimeProps";

const FoodWidget = (props: FoodWidgetProps) => {
    return (
        <div className={`${styles['food-widget']} ${props.selected && styles['food-widget_selected']}`}>
            <figure className={styles['food-widget__image']}>
                <img
                    src={props.img_url}
                    alt={props.img_alt}
                />
            </figure>
            <div className={styles["food-widget__info"]}>
                <div className={styles["food-widget__title"]}>{props.title}</div>
                <div className={styles["food-widget__desc"]}>{props.status}</div>
            </div>
            <div className={styles['food-widget__time']}>
                <Time
                    time={props.time}
                    timeType={TimeType.small}
                />
            </div>
        </div>
    );
};

export default FoodWidget;
