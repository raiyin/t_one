import { ArticleProps } from '../../../types/ArticleProps'
import Title from '../../atoms/Title/Title'
import styles from './Article.module.css'

const Article = (props: ArticleProps) => {
    return (
        <div>

            <Title text={props.article_title} selectStart={0} selectEnd={0} fontSize={40} fontWeight={600} lineHeight={45} />
        </div>
    )
}

export default Article
