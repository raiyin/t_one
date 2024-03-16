import styles from './Rating.module.css'
import Rating_Star from '../../../assets/images/svgs/star.svg';

const Rating = (props: { rating: string }) => {
    return (
        <div className={styles['rating_container']}>
            <img
                src={Rating_Star}
                alt="Grapefruit slice atop a pile of other slices"
            />
            {props.rating}
        </div>
    )
}

export default Rating
