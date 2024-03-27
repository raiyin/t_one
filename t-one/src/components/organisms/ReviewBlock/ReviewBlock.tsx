import CommentWidget from '../../molecules/CommentWidget/CommentWidget'
import styles from './ReviewBlock.module.css'
import { ReviewProps } from '../../../types/ReviewProps'

const ReviewBlock = (props: ReviewProps) => {
    return (
        <div className={styles['review_container']}>

            <ul className={props.direction === 'row' ? styles['reviews_row'] : styles['reviews_column']}>

                {props.comments.map(comment =>
                    <li className={props.direction === 'row'
                        ? styles['comment-widget__wrapper_row']
                        : styles['comment-widget__wrapper_column']}
                        key={comment.id}>
                        <CommentWidget user_handle={comment.user.username} comment={comment.body} key={comment.id} />
                    </li>
                )}

            </ul>
        </div>
    )
}

export default ReviewBlock
