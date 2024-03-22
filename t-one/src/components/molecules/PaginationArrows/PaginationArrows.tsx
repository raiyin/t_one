import styles from './PaginationArrows.module.css'
import { PaginaitonArrowsProps } from '../../../types/PaginationsArrowProps'
import ArrowIcon from '../../atoms/ArrowIcon/ArrowIcon'
import { ArrowDirection } from '../../../types/ArrowProps'

const PaginationArrows = (props: PaginaitonArrowsProps) => {
    return (
        <div className={styles['pagination']}>
            <ArrowIcon direction={ArrowDirection.Back} isActive={props.leftIsActive} />

            <ArrowIcon direction={ArrowDirection.Forth} isActive={props.rightIsActive} />
        </div>
    )
}

export default PaginationArrows
