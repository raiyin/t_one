import LogoSvg from "@assets/images/svgs/Logo.svg";
import styles from "./Logo.module.scss";
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Logo = (props: { image_size: number, font_size: number }) => {

    const imageClass = {}
    const fontClass = {}

    imageClass[('logo_size_' + props.image_size) as keyof typeof imageClass] = true
    fontClass[('font_size_' + props.font_size) as keyof typeof fontClass] = true

    const imageClassName = cx(imageClass);
    const fontClassName = cx(fontClass)

    return (
        <div className={styles.logo}>
            <img src={LogoSvg} alt="Logo" className={imageClassName} />
            <div className={`${styles["logo-text"]} ${fontClassName}`}>eatly</div>
        </div>
    );
};

export default Logo;
