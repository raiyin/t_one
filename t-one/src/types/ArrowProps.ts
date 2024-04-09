export enum ArrowDirection { Back, Forth }

export type ArrowProps = {
    isEnable: boolean;
    direction: ArrowDirection;
    onClick: () => void;
};
