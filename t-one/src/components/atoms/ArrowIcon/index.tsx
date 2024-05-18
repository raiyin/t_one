import BackArrowImage from '@assets/images/svgs/back_arrow.svg';
import ForthArrowImage from '@assets/images/svgs/forth_arrow.svg';
import BackArrowImage_Active from '@assets/images/svgs/back_arrow_active.svg';
import ForthArrowImage_Active from '@assets/images/svgs/forth_arrow_active.svg';
import { ArrowDirection, ArrowProps } from '@/types/ArrowProps';

const ArrowIcon = (props: ArrowProps): JSX.Element => {

    if (props.direction === ArrowDirection.Back && props.isEnable)
        return (
            <img src={BackArrowImage_Active} alt='' onClick={props.onClick} />
        );
    else if (props.direction === ArrowDirection.Forth && props.isEnable)
        return (
            <img src={ForthArrowImage_Active} alt='' onClick={props.onClick} />
        );
    else if (props.direction === ArrowDirection.Back && !props.isEnable)
        return (
            <img src={BackArrowImage} alt='' onClick={props.onClick} />
        );
    else return (
        <img src={ForthArrowImage} alt='' onClick={props.onClick} />
    );
};

export default ArrowIcon;
