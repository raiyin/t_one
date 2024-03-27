import { ArrowDirection } from "./ArrowProps";
enum ButtonType { Primary, Ghost }

export default ButtonType;

export type ButtonProps = {
    type: ButtonType;
    text: string;
    needArrow: boolean;
    direction: ArrowDirection;
    onClick: () => void;
};
