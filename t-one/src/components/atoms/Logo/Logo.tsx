import LogoSvg from "@assets/images/svgs/Logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={LogoSvg} alt="Your SVG" />
            <div className={styles["logo-text"]}>eatly</div>
        </div>
    );
};

export default Logo;
