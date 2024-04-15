import { CommentWidgetProps } from '@types/CommentWidgetProps';
import styles from './CommentWidget.module.css';
import QuoteImage from '@assets/images/svgs/quote.svg';
import Title from '@/components/atoms/Title';

const CommentWidget = (props: CommentWidgetProps) => {
    return (
        <div className={styles['widget']}>

            <div className={`${styles['widget-body']}`}>

                <div className={`${styles['widget-user']}`}>
                    <Title
                        text={props.user_handle}
                        selectEnd={0}
                        selectStart={0}
                        fontSize={21}
                        fontWeight={500}
                        lineHeight={31}
                        hideOverflow={false}
                    />

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
