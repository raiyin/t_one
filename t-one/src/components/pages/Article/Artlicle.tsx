import styles from './Article.module.css'
import ButtonType from '../../../types/ButtonProps'
import Button from '../../atoms/Button/Button'
import Article from '../../organisms/Article/Article'
import ReviewBlock from '../../organisms/ReviewBlock/ReviewBlock'
import { ArrowDirection } from '../../../types/ArrowProps'
import Header from '../../organisms/Header/Header'
import Footer from '../../organisms/Footer/Footer'

const Artlicle = () => {


    return (
        <>
            <Header />
            <Article />
            <div className={styles['back-button']}>
                <Button type={ButtonType.Ghost} text={'All Articles'} needArrow={true} direction={ArrowDirection.Back} />
            </div>
            <ReviewBlock direction={'column'} comments={[]} />
            <Footer />
        </>
    )
}

export default Artlicle
