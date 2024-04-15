import { useState } from "react";
import styles from "./Slider.module.css";
import CommentWidget from "@/components/molecules/CommentWidget";
import { Comment } from "@types/Comment";

const Slider = (props: { items: Comment[]; }) => {
    const [offset, setOffset] = useState(1);

    return (
        <div className={styles["slideshow"]}>
            <div
                className={`${styles["slides"]} ${styles["slides_" + offset]}`}
            >
                {props.items.map((comment) => (
                    <div className={styles["slide"]}
                        key={comment.id}>
                        <CommentWidget
                            user_handle={comment.user.username}
                            comment={comment.body}
                        />
                    </div>
                ))}
            </div>

            <div className={styles["dots"]}>
                {props.items.map((comment, i) => (
                    <span
                        key={comment.id}
                        className={`${styles["dot"]} ${offset === i + 1 && styles["selected"]}`}
                        onClick={() => setOffset(i + 1)}
                    ></span>
                ))}
            </div>
        </div>

    );
};

export default Slider;
