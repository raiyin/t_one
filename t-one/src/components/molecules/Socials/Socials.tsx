import styles from './Socials.module.css';
import InstaIcon from '../../../assets/images/svgs/insta.svg'
import LinkedinIcon from '../../../assets/images/svgs/linkedin.svg'
import FacebookIcon from '../../../assets/images/svgs/facebook.svg'
import TwitterIcon from '../../../assets/images/svgs/twitter.svg'

const Socials = () => {
    return (
        <div className={styles['socials']}>
            <img src={InstaIcon} alt="" />
            <img src={LinkedinIcon} alt="" />
            <img src={FacebookIcon} alt="" />
            <img src={TwitterIcon} alt="" />
        </div>
    )
}

export default Socials
