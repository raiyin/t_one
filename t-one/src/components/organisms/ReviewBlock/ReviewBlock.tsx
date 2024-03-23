import CommentWidget from '../../molecules/CommentWidget/CommentWidget'
import styles from './ReviewBlock.module.css'
import { ReviewProps } from '../../../types/ReviewProps'

const ReviewBlock = (props: ReviewProps) => {
    return (
        <div className={styles['review_container']}>
            <ul className={props.direction === 'row' ? styles['reviews_row'] : styles['reviews_column']}>
                <CommentWidget user_handle={'@omottley'} comment={'I cannot believe how I found you, this is so pretty.'} selected />
                <CommentWidget user_handle={'@omottley'} comment={'I cannot believe how I found you, this is so pretty.'} selected={false} />
                <CommentWidget user_handle={'@omottley'} comment={'I cannot believe how I found you, this is so pretty.'} selected={false} />
            </ul>
        </div>
    )
}

export default ReviewBlock
