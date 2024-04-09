import LogoSvg from "../../../assets/images/svgs/logo.svg";
import styles from "./Logo.module.scss";
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Logo = (props: { image_size: number, font_size: number }) => {

    const imageClass = {}
    const fontClass = {}

    imageClass[('logo_size_' + props.image_size) as keyof typeof imageClass] = true
    fontClass[('font_size_' + props.font_size) as keyof typeof fontClass] = true

    const imageClassName = cx(imageClass);
    const fontClassName = cx(fontClass)

    return (
        <Link to={`/`} className={styles.logo}>
            <img src={LogoSvg} alt="Logo" className={imageClassName} />
            <div className={`${styles["logo_text"]} ${fontClassName}`}>eatly</div>
        </Link>
    );
};

export default Logo;
