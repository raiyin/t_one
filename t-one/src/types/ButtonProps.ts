import { ArrowDirection } from "./ArrowProps";
enum ButtonType { Primary, Secondary, Ghost }

export default ButtonType;

export type ButtonProps = {
    type: ButtonType;
    text: string;
    needArrow: boolean;
    direction: ArrowDirection;
};
