import CommentWidget from "@/components/molecules/CommentWidget";
import styles from "./styles.module.css";
import { ReviewProps } from "@types/ReviewProps";
import Slider from "@/components/molecules/Slider";
import { useEffect, useState } from "react";

const ReviewBlock = (props: ReviewProps) => {

    const [isWide, setIsWide] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia("(width > 576px)");
        const onChange = () => setIsWide(!!mql.matches);

        mql.addListener(onChange);
        setIsWide(mql.matches);
        console.log(props.direction);
        console.log(isWide);

        return () => mql.removeListener(onChange);
    }, []);

    return (
        <section className={styles['review-container']}>
            {
                props.direction === "row" && isWide
                    ? (
                        <div className={styles["review-container__row"]}>
                            <Slider items={props.comments} />
                        </div>
                    )
                    : (
                        <div className={styles["review-container__column"]}>
                            <ul className={styles["reviews_column"]}>
                                {props.comments.map((comment) => (
                                    <li
                                        className={styles["comment-widget__wrapper_column"]}
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
