import { ArticleHeadProps } from '../../../types/ArticleProps'
import HashTag from '../../atoms/HashTag/HashTag'
import Rating from '../../atoms/Rating/Rating'
import WrittenByBlock from '../WrittenByBlock/WrittenByBlock'
import styles from './ArticleHead.module.css'

const ArticleHead = (props: ArticleHeadProps) => {
    return (
        <div className={styles['article-head']}>
            <div className={styles['article-head_info']}>
                <WrittenByBlock author={props.author} ava_url={props.ava_url} />
                <div className={styles['article-head_subinfo']}>
                    <Rating rating={props.rating} />
                    <HashTag text={props.hashtag} />
                </div>
            </div>
        </div>
    )
}

export default ArticleHead
