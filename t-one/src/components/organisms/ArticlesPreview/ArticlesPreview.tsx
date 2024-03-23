import Title from '../../atoms/Title/Title'
import ArticleWidget from '../../molecules/ArticleWidget/ArticleWidget'
import styles from './ArticlesPreview.module.css'
import { ArticleWidgetProps } from '../../../types/ArticleProps'

const ArticlesPreview = (props: { articles: ArticleWidgetProps[], leftArrowIsEnable: boolean, rightArrowIsEnable: boolean }) => {

    console.log(JSON.stringify(props.articles))

    return (
        <div className={styles['article-preview']}>
            <Title text={'Latest Articles'} selectStart={7} selectEnd={15} fontSize={45} fontWeight={600} lineHeight={54} />

            <div className={styles['articles-preview_previews']}>

                {props.articles.map(article =>
                    <ArticleWidget
                        body={article.body}
                        title={article.title}
                        reactions={article.reactions}
                        tags={article.tags}
                    />)}

            </div>

        </div>
    )
}

export default ArticlesPreview
