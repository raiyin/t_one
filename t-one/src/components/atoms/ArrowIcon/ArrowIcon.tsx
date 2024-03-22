import BackArrowImage from '../../../assets/images/svgs/back_arrow.svg'
import ForthArrowImage from '../../../assets/images/svgs/forth_arrow.svg'
import BackArrowImage_Active from '../../../assets/images/svgs/back_arrow_active.svg'
import ForthArrowImage_Active from '../../../assets/images/svgs/forth_arrow_active.svg'
import { ArrowDirection, ArrowProps } from '../../../types/ArrowProps'

const ArrowIcon = (props: ArrowProps) => {

    if (props.direction === ArrowDirection.Back && props.isActive)
        return (
            <img src={BackArrowImage_Active} alt='' />
        )
    else if (props.direction === ArrowDirection.Forth && props.isActive)
        return (
            <img src={ForthArrowImage_Active} alt='' />
        )
    else if (props.direction === ArrowDirection.Back && !props.isActive)
        return (
            <img src={BackArrowImage} alt='' />
        )
    else return (
        <img src={ForthArrowImage} alt='' />
    )
}

export default ArrowIcon
