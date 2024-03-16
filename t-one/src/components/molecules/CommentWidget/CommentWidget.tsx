import { CommentWidgetProps } from '../../../types/CommentWidgetProps'
import styles from './CommentWidget.module.css'
import QuoteImage from '../../../assets/images/svgs/quote.svg'
import Title from '../../atoms/Title/Title'

const CommentWidget = (props: CommentWidgetProps) => {
    return (
        <div className={styles['widget_container']}>

            <div className={styles['widget_bg']}>
            </div>

            <div className={`${styles['widget_body']} ${!props.selected && styles['widget_body_unselected']}`}>

                {props.selected && <div className={`${styles['widget_user']}`}>
                    <Title
                        text={props.user_handle}
                        selectEnd={0}
                        selectStart={0}
                        fontSize={21}
                        fontWeight={500}
                        lineHeight={31}
                    />

                    <img src={QuoteImage} alt="" />

                </div>}


                <div className={`${styles['widget_quote']}  ${!props.selected && styles['widget_quote_unselected']}`}>
                    {props.comment}
                </div>
            </div>
        </div>
    )
}

export default CommentWidget
