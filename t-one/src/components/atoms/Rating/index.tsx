import styles from './styles.module.css';
import Rating_Star from '@assets/images/svgs/star.svg';
import { RatingProps } from '@/types/RatingProps';

const Rating = (props: RatingProps) => {
    return (
        <div className={styles['rating']}>

            {
                props.starFirst
                    ?
                    <>
                        <img
                            src={Rating_Star}
                            alt="Rating mark"
                        />
                        <span>{props.rating}</span>
                    </>
                    :
                    <>
                        <span>{props.rating}</span>
                        <img className={styles['rating__star']}
                            src={Rating_Star}
                            alt="Rating mark"
                        />
                    </>
            }

        </div>
    );
};

export default Rating;
