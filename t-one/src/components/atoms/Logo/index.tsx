import LogoSvg from "@assets/images/svgs/logo.svg";
import { LogoProps } from "@types/LogoProps";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Location from "@types/Location";

const Logo = (props: LogoProps) => {

    const isOnHeader = props.location === Location.Header;

    return (
        <Link to={`/`} className={styles['logo']}>
            <img src={LogoSvg} alt="Logo" className={isOnHeader ? styles['logo-img__header'] : styles['logo-img__footer']} />
            <div className={isOnHeader ? styles['logo-text__header'] : styles['logo-text__footer']}>eatly</div>
        </Link>
    );
};

export default Logo;
