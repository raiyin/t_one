import { ArticleProps } from '@/types/ArticleProps';
import Title from '@/components/atoms/Title';
import ArticleHead from '@/components/molecules/ArticleHead';
import styles from './styles.module.css';
import { TitleType } from '@/types/TitleProps';

const Article = (props: ArticleProps) => {

    return (
        <div className={styles['article']}>
            <div className={styles['article-title']}>
                <Title
                    text={props.title}
                    selectStart={0}
                    selectEnd={0}
                    titleType={TitleType.H4}
                    hideOverflow={false} />
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
    );
};

export default Article;
