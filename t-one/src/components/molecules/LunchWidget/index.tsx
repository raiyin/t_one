import styles from './styles.module.css';
import Tag from '@/components/atoms/Tag';
import Time from '@/components/atoms/Time';
import Rating from '@/components/atoms/Rating';
import Title from '@/components/atoms/Title';
import { LunchWidgetProps } from '@/types/LunchWidgetProps';
import { TitleType } from '@/types/TitleProps';
import { TimeType } from '@/types/TimeProps';

const LunchWidget = (props: LunchWidgetProps) => {
    return (
        <div className={styles['lunch']}>

            <div className={styles['lunch__image']}>
                <img
                    src={props.image}
                    alt={`${props.name} image`}
                    loading='lazy'
                    decoding='async'
                />
            </div>

            <div className={styles['lunch__tag']}>
                {props.tags.map((tag, tag_index) => {
                    if (tag_index < 4) {
                        return (
                            <Tag text={tag} type='small' key={tag} />
                        );
                    }
                })}
            </div>

            <div className={styles['lunch__text']}>
                <Title
                    text={props.name}
                    selectStart={0}
                    selectEnd={0}
                    titleType={TitleType.H5}
                    hideOverflow={true}
                />
            </div>

            <div className={styles['lunch__info']}>
                <Time
                    time={`${props.cookTimeMinutes + props.prepTimeMinutes}min`}
                    timeType={TimeType.medium}
                />
                <Rating rating={props.rating.toString()} starFirst={true} />
            </div>

        </div>
    );
};

export default LunchWidget;
