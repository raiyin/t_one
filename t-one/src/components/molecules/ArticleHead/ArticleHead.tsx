import { ArticleHeadProps } from '../../../types/ArticleProps'
import { tagsToHashTagString } from '../../../utils/mappers'
import HashTag from '../../atoms/HashTag/HashTag'
import Rating from '../../atoms/Rating/Rating'
import WrittenByBlock from '../WrittenByBlock/WrittenByBlock'
import styles from './ArticleHead.module.css'

const ArticleHead = (props: ArticleHeadProps) => {

    return (
        <div className={styles['article-head']}>

            <div className={styles['article-head_info']}>

                <WrittenByBlock userId={props.userId} type='medium' />

                <div className={styles['article-head_subinfo']}>
                    <Rating rating={props.reactions} startFirst={false} />
                    <HashTag
                        text={tagsToHashTagString(props.tags)}
                        size={"medium"}
                    />
                </div>

            </div>
        </div>
    )
}

export default ArticleHead
