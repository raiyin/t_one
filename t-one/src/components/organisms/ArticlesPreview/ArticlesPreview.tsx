import Title from '../../atoms/Title/Title'
import ArticleWidget from '../../molecules/ArticleWidget/ArticleWidget'
import styles from './ArticlesPreview.module.css'
import { ArticleProps } from '../../../types/ArticleProps'

const ArticlesPreview = (props: { articles: ArticleProps[], leftArrowIsEnable: boolean, rightArrowIsEnable: boolean }) => {

    return (
        <div className={styles['article-preview']}>
            <Title
                text={'Latest Articles'}
                selectStart={7}
                selectEnd={15}
                fontSize={45}
                fontWeight={600}
                lineHeight={54}
                hideOverflow={false}
            />

            <div className={styles['articles-preview_previews']}>

                {props.articles.map(article =>
                    <ArticleWidget
                        id={article.id}
                        body={article.body}
                        title={article.title}
                        reactions={article.reactions}
                        tags={article.tags}
                        userId={article.userId}
                    />)}

            </div>

        </div>
    )
}

export default ArticlesPreview
