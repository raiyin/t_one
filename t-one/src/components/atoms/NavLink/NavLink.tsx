import { Link } from "react-router-dom";
import LinkLocation from "../../../types/LinkLocation";
import { NavLinkProps } from "../../../types/NavLinkProps";
import styles from "./NavLink.module.css";

const NavLink = (props: NavLinkProps) => {
    const isHeaderLink = props.location === LinkLocation.Header;

    return (
        <div>
            <Link
                className={`${styles.navlink} ${isHeaderLink ? styles.navlink_header : styles.navlink_footer}`}
                to={props.link}>
                {props.content}
            </Link>
        </div>
    );
};

export default NavLink;
