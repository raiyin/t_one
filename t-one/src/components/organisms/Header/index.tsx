import styles from "./styles.module.css";
import Logo from "@/components/atoms/Logo";
import NavBar from "@/components/molecules/NavBar";
import Location from "@/types/Location";
import { NavBarProps } from "@/types/NavBarProps";
import BasrIcon from '@assets/images/svgs/bars.svg';

const Header = () => {
    const navBarProps: NavBarProps = {
        location: Location.Header,
        links: [
            {
                location: Location.Header,
                link: "/#recipes",
                content: "Recipes",
            },
            {
                location: Location.Header,
                link: "/#faq",
                content: "FAQ",
            },
            {
                location: Location.Header,
                link: "/blog",
                content: "Blog",
            },
        ],
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_conrainer}>
                <Logo location={Location.Header} />
                <div className={styles['header_navbar']}>
                    <NavBar {...navBarProps} />
                </div>
                <div className={styles['header_bars']}>
                    <img src={BasrIcon} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
