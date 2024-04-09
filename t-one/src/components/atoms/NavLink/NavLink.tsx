import LinkLocation from "../../../types/LinkLocation";
import { NavLinkProps } from "../../../types/NavLinkProps";
import styles from "./NavLink.module.css";

const NavLink = (props: NavLinkProps) => {
    const isHeaderLink = props.location === LinkLocation.Header;

    return (
        <div>
            <a
                className={`${styles.navlink} ${isHeaderLink ? styles.navlink_header : styles.navlink_footer}`}
                href={props.link}
            >
                {props.content}
            </a>
        </div>
    );
};

export default NavLink;
