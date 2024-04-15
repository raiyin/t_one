import { Link } from 'react-router-dom';
import { ArticleProps } from '@types/ArticleProps';
import { tagsToHashTagString } from '@utils/mappers';
import HashTag from '@/components/atoms/HashTag';
import Rating from '@/components/atoms/Rating';
import styles from './ArticleWidget.module.css';
import WrittenByBlock from '@/components/molecules/WrittenByBlock';

const ArticleWidget = (props: ArticleProps) => {
    return (
        <div className={styles['article-widget']}>

            <Link to={`/articles/${props.id}`} className={styles['article-widget__title']}>
                {props.title}
            </Link>

            <div className={styles['article-widget__hash-mark']}>
                <WrittenByBlock
                    userId={props.userId}
                    type='small'
                />
                <Rating rating={props.reactions} startFirst={false} />
            </div>
            <HashTag
                text={tagsToHashTagString(props.tags)}
                size={'small'}
            />

            <div className={styles['article-widget__text']}>
                {props.body}
            </div>
        </div>
    );
};

export default ArticleWidget;
