export type AddCommentProps = {
    placeholder: string;
    buttonAction: (comment: string) => Promise<boolean>;
};
