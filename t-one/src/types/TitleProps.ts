export enum TitleType { H1, H2, H3, H4, H5 }

export type TitleProps = {
    text: string;
    selectStart: number;
    selectEnd: number;
    titleType: TitleType;
    hideOverflow: boolean;
};
