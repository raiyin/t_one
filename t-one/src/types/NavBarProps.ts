import Location from "./Location";
import { NavLinkProps } from "./NavLinkProps";

export type NavBarProps = {
    location: Location;
    links: NavLinkProps[];
};
