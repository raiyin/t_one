import styles from './LunchWidget.module.css'
import Tag from '../../atoms/Tag/Tag';
import Time from '../../atoms/Time/Time';
import Rating from '../../atoms/Rating/Rating';
import Title from '../../atoms/Title/Title';
import { LunchWidgetProps } from '../../../types/LunchWidgetProps';

const LunchWidget = (props: LunchWidgetProps) => {
    return (
        <div className={styles['container']}>

            <div className={styles['image_wrapper']}>
                <img
                    src={props.image}
                    alt={`${props.name} image`}
                    loading='lazy'
                    decoding='async'
                />
            </div>

            <div className={styles['tag_wrapper']}>
                {props.tags.map((tag, tag_index) => {
                    if (tag_index < 4) {
                        return (
                            <Tag text={tag} key={tag} />
                        )
                    }
                })}
            </div>

            <div className={styles['text_wrapper']}>
                <Title
                    text={props.name}
                    selectStart={0}
                    selectEnd={0}
                    fontSize={26}
                    fontWeight={600}
                    lineHeight={42}
                    hideOverflow={true}
                />
            </div>

            <div className={styles['info_wrapper']}>
                <Time
                    time={`${props.cookTimeMinutes + props.prepTimeMinutes}min`}
                    fontWeight={400}
                    lineHeight={26}
                    fontSize={20}
                    font={'manrope'}
                />
                <Rating rating={props.rating.toString()} startFirst={true} />
            </div>

        </div>
    )
}

export default LunchWidget
