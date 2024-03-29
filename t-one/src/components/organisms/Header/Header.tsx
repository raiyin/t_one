import styles from "./Header.module.css";
import Logo from "../../atoms/Logo/Logo";
import NavBar from "../../molecules/NavBar/NavBar";
import LinkLocation from "../../../types/LinkLocation";
import { NavBarProps } from "../../../types/NavBarProps";
import BasrIcon from '../../../assets/images/svgs/bars.svg'

const Header = () => {
    const navBarProps: NavBarProps = {
        location: LinkLocation.Header,
        links: [
            {
                location: LinkLocation.Header,
                link: "/#recipes",
                content: "Recipes",
            },
            {
                location: LinkLocation.Header,
                link: "/#faq",
                content: "FAQ",
            },
            {
                location: LinkLocation.Header,
                link: "/blog",
                content: "Blog",
            },
        ],
    };

    return (
        <div className={styles.header}>
            <Logo image_size={46} font_size={22} />
            <div className={styles['header_navbar']}>
                <NavBar {...navBarProps} />
            </div>
            <div className={styles['header_bars']}>
                <img src={BasrIcon} alt="" />
            </div>
        </div>
    );
};

export default Header;
