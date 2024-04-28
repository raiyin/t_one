import styles from './styles.module.css';
import Tag from '@/components/atoms/Tag';
import Time from '@/components/atoms/Time';
import Rating from '@/components/atoms/Rating';
import Title from '@/components/atoms/Title';
import { LunchWidgetProps } from '@types/LunchWidgetProps';
import { TitleType } from '@/types/TitleProps';

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
                        );
                    }
                })}
            </div>

            <div className={styles['text_wrapper']}>
                <Title
                    text={props.name}
                    selectStart={0}
                    selectEnd={0}
                    titleType={TitleType.H5}
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
    );
};

export default LunchWidget;
