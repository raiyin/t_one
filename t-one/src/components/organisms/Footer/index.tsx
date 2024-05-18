import Location from '@/types/Location';
import { NavBarProps } from '@/types/NavBarProps';
import Logo from '@/components/atoms/Logo';
import NavBar from '@/components/molecules/NavBar';
import Socials from '@/components/molecules/Socials';
import styles from './styles.module.css';

const Footer = () => {
    const navBarProps: NavBarProps = {
        location: Location.Footer,
        links: [
            {
                location: Location.Footer,
                link: "/#recipes",
                content: "Recipes",
            },
            {
                location: Location.Footer,
                link: "/#faq",
                content: "FAQ",
            },
            {
                location: Location.Footer,
                link: "/blog",
                content: "Blog",
            },
        ],
    };

    return (
        <footer >
            <div className={styles['footer-container']}>

                <div className={styles['footer_menu']}>
                    <Logo location={Location.Footer} />
                    <NavBar {...navBarProps} />
                </div>
                <div className={styles['fotter_line']}>
                    <hr />
                </div>
                <div className={styles['lower']}>
                    <div className={styles['copy']}>
                        © 2023 EATLY All Rights Reserved.
                    </div>
                    <Socials />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
