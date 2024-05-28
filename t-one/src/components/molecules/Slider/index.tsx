import { useState } from "react";
import styles from "./styles.module.css";
import CommentWidget from "@/components/molecules/CommentWidget";
import { Comment } from "@/types/Comment";

const Slider = (props: { items: Comment[]; }) => {
    const [offset, setOffset] = useState(1);

    return (
        <div className={styles["slider"]}>
            <div
                className={`${styles["slider__slides"]} ${styles["slider__slide_" + offset]}`}
            >
                {props.items.map((comment) => (
                    <div className={styles["slider__slide"]}
                        key={comment.id}>
                        <CommentWidget
                            user_handle={comment.user.username}
                            comment={comment.body}
                        />
                    </div>
                ))}
            </div>

            <div className={styles["slider__dots"]}>
                {props.items.map((comment, i) => (
                    <span
                        key={comment.id}
                        className={`${styles["slider__dot"]} ${offset === i + 1 && styles["slider__dot_selected"]}`}
                        onClick={() => setOffset(i + 1)}
                    ></span>
                ))}
            </div>
        </div>

    );
};

export default Slider;
