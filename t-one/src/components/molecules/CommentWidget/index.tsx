import { CommentWidgetProps } from '@/types/CommentWidgetProps';
import styles from './styles.module.css';
import QuoteImage from '@assets/images/svgs/quote.svg';

const CommentWidget = (props: CommentWidgetProps) => {
    return (
        <div className={styles['widget']}>

            <div className={`${styles['widget-body']}`}>

                <div className={`${styles['widget-user']}`}>
                    <div className={`${styles['widget-user__text']}`} >
                        {props.user_handle}
                    </div>
                    <figure>
                        <img src={QuoteImage} alt="" />
                    </figure>
                </div>

                <div className={`${styles['widget-quote']}`}>
                    {props.comment}
                </div>

            </div>

        </div>

    );
};

export default CommentWidget;
