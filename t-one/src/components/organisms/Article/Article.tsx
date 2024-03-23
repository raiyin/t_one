import { ArticleProps } from '../../../types/ArticleProps'
import Title from '../../atoms/Title/Title'
import ArticleHead from '../../molecules/ArticleHead/ArticleHead'
import styles from './Article.module.css'

const Article = () => {

    const props: ArticleProps = {
        article_text: 'It wasnt quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasnt time to salvage the situation, but he continued to delude himself into believing there was.',
        article_title: 'How To Order Food On eatly ?',
        author: 'Terry Medhurst',
        ava_url: 'https://robohash.org/Terry.png?set=set4',
        rating: '7',
        hashtag: '#history, #food'
    }

    return (
        <div className={styles['article']}>
            <div className={styles['article-title']}>
                <Title
                    text={props.article_title}
                    selectStart={0}
                    selectEnd={0}
                    fontSize={40}
                    fontWeight={600}
                    lineHeight={45} />
            </div>

            <div className={styles['article-head']}>
                <ArticleHead
                    author={props.author}
                    ava_url={props.ava_url}
                    rating={props.rating}
                    hashtag={props.hashtag} />
            </div>

            <div className={styles['article-text']}>
                {props.article_text}
            </div>
        </div>
    )
}

export default Article
