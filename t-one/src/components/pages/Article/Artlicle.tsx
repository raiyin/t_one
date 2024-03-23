import styles from './Article.module.css'
import ButtonType from '../../../types/ButtonProps'
import Button from '../../atoms/Button/Button'
import Article from '../../organisms/Article/Article'
import ReviewBlock from '../../organisms/ReviewBlock/ReviewBlock'
import { ArrowDirection } from '../../../types/ArrowProps'

const Artlicle = () => {
    return (
        <>
            <Article />
            <div className={styles['back-button']}>
                <Button type={ButtonType.Ghost} text={'All Articles'} needArrow={true} direction={ArrowDirection.Back} />
            </div>
            <ReviewBlock needTitle={false} direction={'column'} comments={[]} title="Customer Say" />
        </>
    )
}

export default Artlicle
