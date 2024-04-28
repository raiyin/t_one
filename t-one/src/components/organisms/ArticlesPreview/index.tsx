import Title from '@/components/atoms/Title';
import ArticleWidget from '@/components/molecules/ArticleWidget';
import styles from './styles.module.css';
import { ArticleProps } from '@types/ArticleProps';
import { TitleType } from '@/types/TitleProps';

const ArticlesPreview = (props: { articles: ArticleProps[], leftArrowIsEnable: boolean, rightArrowIsEnable: boolean; }) => {

    return (
        <div className={styles['article-preview']}>
            <Title
                text={'Latest Articles'}
                selectStart={7}
                selectEnd={15}
                titleType={TitleType.H3}
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
                        key={article.id}
                    />)}

            </div>

        </div>
    );
};

export default ArticlesPreview;
