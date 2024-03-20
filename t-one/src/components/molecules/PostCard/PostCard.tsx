import HashTag from '../../atoms/HashTag/HashTag'
import Rating from '../../atoms/Rating/Rating'
import Title from '../../atoms/Title/Title'
import styles from './PostCard.module.css'

const PostCard = () => {
    return (
        <div className={styles['post-card']}>
            <Title text={'How to order food ?'} selectStart={0} selectEnd={0} fontSize={20} fontWeight={600} lineHeight={25} />

            <div className={styles['post-card__hash-mark']}>
                <HashTag text={'#history, #food'} />
                <Rating rating={'7'} />
            </div>

            <div className={styles['post-card__text']}>
                It wasn't quite yet time to panic. There was still time to salvage the situation...
            </div>
        </div>
    )
}

export default PostCard
