import H1Title from '../../atoms/H1Title/H1Title'
import LunchWidget from '../../molecules/LunchWidget/LunchWidget'
import styles from './LunchBlock.module.css'

const LunchBlock = () => {
    return (
        <div className={styles['lunch_container']}>
            <H1Title text={'Our Top Lunch'} selectStart={8} selectEnd={12} />
            <ul className={styles['lunches_list']}>
                <LunchWidget />
                <LunchWidget />
                <LunchWidget />
            </ul>
        </div>
    )
}

export default LunchBlock
