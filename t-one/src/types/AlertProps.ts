export enum AlertType { success, info, warning, error }

export type AlertProps = {
    type: AlertType;
    text: string;
    show: boolean;
    setShow: (needShow: boolean) => void
};
