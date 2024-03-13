import { NavBarProps } from "../../../types/NavBarProps";

const NavBar = (props: NavBarProps) => {
    return (
        <div>
            {props.links.map((link) => (
                <div>{link}</div>
            ))}
        </div>
    );
};

export default NavBar;
