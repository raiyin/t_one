import CommentWidget from "../../molecules/CommentWidget/CommentWidget";
import styles from "./ReviewBlock.module.css";
import { ReviewProps } from "../../../types/ReviewProps";
import Slider from "../../molecules/Slider/Slider";

const ReviewBlock = (props: ReviewProps) => {
    return (
        <>
            {
                props.direction === "column"
                    ? (
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
                    : (

                        <div className={styles["review-container__row"]}>
                            <Slider items={props.comments} />
                        </div>
                    )
            }
        </>

    );
};

export default ReviewBlock;
