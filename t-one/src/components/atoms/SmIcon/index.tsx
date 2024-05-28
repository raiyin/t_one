import InstaIcon from '@assets/images/svgs/insta.svg';
import LinkedinIcon from '@assets/images/svgs/linkedin.svg';
import FacebookIcon from '@assets/images/svgs/facebook.svg';
import TwitterIcon from '@assets/images/svgs/twitter.svg';
import styles from './styles.module.css';

const Icon = (props: { sm_name: "insta" | "linkedin" | "facebook" | "twitter"; }) => {
    if (props.sm_name === "insta") {
        return (
            <a className={styles['sm-icon']} href="https://www.instagram.com">
                <img src={InstaIcon} alt="Instagram link" />
            </a>);
    }
    else if (props.sm_name === "linkedin") {
        return (
            <a className={styles['sm-icon']} href="https://linkedin.com">
                <img src={LinkedinIcon} alt="Linkedin link" />
            </a>);
    }
    else if (props.sm_name === "facebook") {
        return (
            <a className={styles['sm-icon']} href="https://www.facebook.com">
                <img src={FacebookIcon} alt="Facebook link" />
            </a>
        );
    }
    else if (props.sm_name === "twitter") {
        return (
            <a className={styles['sm-icon']} href="https://twitter.com">
                <img src={TwitterIcon} alt="Twitter link" />
            </a>
        );
    }
};

export default Icon;
