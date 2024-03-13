import { LinkLocation } from "../../../types/LinkLocation";
import { NavLinkProps } from "../../../types/NavLinkProps";
import styles from "./NavLink.module.css";

const NavLink = (navLinkProps: NavLinkProps) => {
    const isHeaderLink = navLinkProps.location === LinkLocation.Header;

    return (
        <div>
            <a
                className={`${styles.navlink} ${isHeaderLink ? styles.navlink_header : styles.navlink_footer}`}
                href={navLinkProps.link}
            >
                MDN
            </a>
        </div>
    );
};

export default NavLink;
