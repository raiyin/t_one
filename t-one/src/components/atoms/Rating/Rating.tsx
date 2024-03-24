import styles from './Rating.module.css'
import Rating_Star from '../../../assets/images/svgs/star.svg';
import { RatingProps } from '../../../types/RatingProps';

const Rating = (props: RatingProps) => {
    return (
        <div className={styles['rating_container']}>

            {
                props.startFirst
                    ?
                    <>
                        <img
                            src={Rating_Star}
                            alt="Rating mark"
                        />
                        {props.rating}
                    </>
                    :
                    <>
                        {props.rating}
                        <img
                            src={Rating_Star}
                            alt="Rating mark"
                        />
                    </>
            }

        </div>
    )
}

export default Rating
