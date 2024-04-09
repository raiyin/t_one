import Title from '../../atoms/Title/Title'
import CommentWidget from '../../molecules/CommentWidget/CommentWidget'
import styles from './ReviewBlock.module.css'
import DividerImage from '../../../assets/images/pngs/divider.png'

const ReviewBlock = () => {
    return (
        <div className={styles['review_container']}>
            <div className={styles['review_title_wrapper']}>

                <Title
                    text={'Customer Say'}
                    selectStart={0}
                    selectEnd={8}
                    fontSize={45}
                    fontWeight={600}
                    lineHeight={26}
                />
            </div>
            <ul className={styles['reviews']}>
                <CommentWidget user_handle={'@omottley'} comment={'I cannot believe how I found you, this is so pretty.'} selected />
                <CommentWidget user_handle={'@omottley'} comment={'I cannot believe how I found you, this is so pretty.'} selected={false} />
                <CommentWidget user_handle={'@omottley'} comment={'I cannot believe how I found you, this is so pretty.'} selected={false} />
            </ul>
            <div className={styles['divider_wrapper']}>
                <img src={DividerImage} />
            </div>
        </div>
    )
}

export default ReviewBlock
