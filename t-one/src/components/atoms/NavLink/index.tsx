import Location from "@types/Location";
import { NavLinkProps } from "@types/NavLinkProps";
import styles from "./styles.module.css";
import { AnchorLink } from "react-anchor-navigation";

const NavLink = (props: NavLinkProps) => {
    const isHeaderLink = props.location === Location.Header;

    return (
        <div>
            <AnchorLink
                className={`${styles['navlink']} ${isHeaderLink ? styles['navlink_header'] : styles['navlink_footer']}`}
                href={props.link}
                activeClassName="blue">
                {props.content}
            </AnchorLink>
        </div>
    );
};

export default NavLink;
