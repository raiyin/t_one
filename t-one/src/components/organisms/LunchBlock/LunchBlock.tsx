import Title from '../../atoms/Title/Title'
import LunchWidget from '../../molecules/LunchWidget/LunchWidget'
import styles from './LunchBlock.module.css'

const LunchBlock = () => {
    return (
        <div className={styles['lunch_container']}>
            <Title text={'Our Top Lunch'} selectStart={8} selectEnd={12} />
            <ul className={styles['lunches_list']}>
                <LunchWidget />
                <LunchWidget />
                <LunchWidget />
            </ul>
        </div>
    )
}

export default LunchBlock
