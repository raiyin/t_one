import { Link } from 'react-router-dom'
import { ArticleWidgetProps } from '../../../types/ArticleProps'
import { tagsToHashTagString } from '../../../utils/mappers'
import HashTag from '../../atoms/HashTag/HashTag'
import Rating from '../../atoms/Rating/Rating'
import styles from './ArticleWidget.module.css'

const ArticleWidget = (props: ArticleWidgetProps) => {
    return (
        <div className={styles['post-card']}>

            <Link to={`/articles/${props.id}`} className={styles['post-card__title']}>
                {props.title}
            </Link>

            <div className={styles['post-card__hash-mark']}>
                <HashTag text={tagsToHashTagString(props.tags)} fontSize={12} />
                <Rating rating={props.reactions} startFirst={false} />
            </div>

            <div className={styles['post-card__text']}>
                {props.body}
            </div>
        </div>
    )
}

export default ArticleWidget
