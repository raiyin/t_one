import LinkLocation from "./LinkLocation";
import { NavLinkProps } from "./NavLinkProps";

export type NavBarProps = {
    location: LinkLocation;
    links: NavLinkProps[];
};
