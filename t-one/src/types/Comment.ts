import { User } from "./User";

export type Comment = {
    id: number;
    body: string;
    postId: number;
    user: User;
};
