import { NavBarProps } from "../../../types/NavBarProps";
import NavLink from "../../atoms/NavLink/NavLink";
import styles from "./NavBar.module.css";
import { NavLinkProps } from "../../../types/NavLinkProps";

const NavBar = (props: NavBarProps) => {
    return (
        <div className={styles.navbar}>
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
        </div>
    );
};

export default NavBar;
