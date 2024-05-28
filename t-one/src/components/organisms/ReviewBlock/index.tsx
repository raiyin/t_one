import CommentWidget from "@/components/molecules/CommentWidget";
import styles from "./styles.module.css";
import { ReviewProps } from "@/types/ReviewProps";
import Slider from "@/components/molecules/Slider";
import { useEffect, useState } from "react";

const ReviewBlock = (props: ReviewProps) => {

    const [isWide, setIsWide] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia("(width > 576px)");
        const onChange = () => setIsWide(!!mql.matches);

        mql.addListener(onChange);
        setIsWide(mql.matches);
        return () => mql.removeListener(onChange);
    }, []);

    return (
        <section className={styles['reviews']}>
            {
                props.direction === "row" && isWide
                    ? (
                        <div className={styles["reviews_type_row"]}>
                            <Slider items={props.comments} />
                        </div>
                    )
                    : (
                        <div className={styles["reviews_type_column"]}>
                            <ul className={styles["reviews__column"]}>
                                {props.comments.map((comment) => (
                                    <li
                                        className={styles["reviews__comment-widget_column"]}
                                        key={comment.id}
                                    >
                                        <CommentWidget
                                            user_handle={comment.user.username}
                                            comment={comment.body}
                                            key={comment.id}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
            }
        </section>

    );
};

export default ReviewBlock;
