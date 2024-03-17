import LinkLocation from '../../../types/LinkLocation';
import { NavBarProps } from '../../../types/NavBarProps';
import Logo from '../../atoms/Logo/Logo'
import NavBar from '../../molecules/NavBar/NavBar'
import Socials from '../../molecules/Socials/Socials';
import styles from './Footer.module.css'

const Footer = () => {
    const navBarProps: NavBarProps = {
        location: LinkLocation.Footer,
        links: [
            {
                location: LinkLocation.Footer,
                link: "https://site.ru/recipes",
                content: "Recipes",
            },
            {
                location: LinkLocation.Footer,
                link: "https://site.ru/faq",
                content: "FAQ",
            },
            {
                location: LinkLocation.Footer,
                link: "https://site.ru/blog",
                content: "Blog",
            },
        ],
    };

    return (
        <footer>

            <div className={styles['footer_menu']}>
                <Logo image_size={60} font_size={29} />
                <NavBar {...navBarProps} />
            </div>
            <hr />
            <div className={styles['lower']}>
                <div className={styles['copy']}>
                    © 2023 EATLY All Rights Reserved.
                </div>
                <Socials />
            </div>
        </footer>
    )
}

export default Footer
