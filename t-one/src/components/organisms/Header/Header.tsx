import styles from "./Header.module.css";
import Logo from "../../atoms/Logo/Logo";
import NavBar from "../../molecules/NavBar/NavBar";
import LinkLocation from "../../../types/LinkLocation";
import { NavBarProps } from "../../../types/NavBarProps";

const Header = () => {
    const navBarProps: NavBarProps = {
        location: LinkLocation.Header,
        links: [
            {
                location: LinkLocation.Header,
                link: "https://site.ru/recipes",
                content: "Recipes",
            },
            {
                location: LinkLocation.Header,
                link: "https://site.ru/faq",
                content: "FAQ",
            },
            {
                location: LinkLocation.Header,
                link: "https://site.ru/blog",
                content: "Blog",
            },
        ],
    };

    return (
        <div className={styles.header}>
            <Logo image_size={46} font_size={22} />
            <NavBar {...navBarProps} />
        </div>
    );
};

export default Header;
