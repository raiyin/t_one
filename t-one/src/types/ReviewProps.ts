import { Comment } from "./Comment";

export type ReviewProps = {
    comments: Comment[];
    direction: 'row' | 'column';
};
