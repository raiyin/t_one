import { ArticleProps } from '../../../types/ArticleProps'
import Title from '../../atoms/Title/Title'
import ArticleHead from '../../molecules/ArticleHead/ArticleHead'
import styles from './Article.module.css'

const Article = (props: ArticleProps) => {

    return (
        <div className={styles['article']}>
            <div className={styles['article-title']}>
                <Title
                    text={props.title}
                    selectStart={0}
                    selectEnd={0}
                    fontSize={40}
                    fontWeight={600}
                    lineHeight={45} />
            </div>

            <div className={styles['article-head']}>
                <ArticleHead
                    userId={props.userId}
                    reactions={props.reactions}
                    tags={props.tags} />
            </div>

            <div className={styles['article-text']}>
                {props.body}
            </div>
        </div>
    )
}

export default Article
