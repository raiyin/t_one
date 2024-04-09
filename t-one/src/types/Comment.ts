import { CommentUser } from "./User";

export type Comment = {
    id: number;
    body: string;
    postId: number;
    user: CommentUser
};
