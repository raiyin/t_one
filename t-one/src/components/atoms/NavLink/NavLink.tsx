import { NavLinkLocation, NavLinkProps } from '../../../types/NavLinkProps';
import styles from './styles.module.css'

const NavLink = (navLinkProps: NavLinkProps) => {

    const isHeaderLink = navLinkProps.location === NavLinkLocation.Header;


    return (
        <div >
            <a className={`${styles.navlink} ${isHeaderLink ? styles.navlink_header : styles.navlink_footer}`} href="https://developer.mozilla.org">MDN</a>
        </div>
    )
}

export default NavLink;
