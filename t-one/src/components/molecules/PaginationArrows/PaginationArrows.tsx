import styles from './PaginationArrows.module.css';
import { PaginaitonArrowsProps } from '@types/PaginationsArrowProps';
import ArrowIcon from '@components/atoms/ArrowIcon/ArrowIcon';
import { ArrowDirection } from '@types/ArrowProps';

const PaginationArrows = (props: PaginaitonArrowsProps) => {
    return (
        <div className={styles['pagination']}>
            <ArrowIcon direction={ArrowDirection.Back} isEnable={props.leftArrowIsEnable} onClick={props.leftArrowOnClick} />

            <ArrowIcon direction={ArrowDirection.Forth} isEnable={props.rightArrowIsEnable} onClick={props.rightArrowOnClick} />
        </div>
    );
};

export default PaginationArrows;
