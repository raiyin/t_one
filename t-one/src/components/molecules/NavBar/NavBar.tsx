import { NavBarProps } from "../../../types/NavBarProps";
import NavLink from "../../atoms/NavLink/NavLink";
import styles from "./NavBar.module.css";
import { NavLinkProps } from "../../../types/NavLinkProps";
import Location from "../../../types/Location";
import {
    AnchorContext,
    AnchorLink,
    AnchorProvider,
    AnchorSection,
} from "react-anchor-navigation";

const NavBar = (props: NavBarProps) => {
    return (
        <nav className={`${styles['navbar']} ${props.location === Location.Header ? styles['navbar_header'] : styles['navbar_footer']}`}>
            {props.links.map((item: NavLinkProps) => {
                return (
                    <NavLink
                        location={props.location}
                        link={item.link}
                        content={item.content}
                        key={item.link}
                    />
                );
            })}
        </nav>
    );
};

export default NavBar;
