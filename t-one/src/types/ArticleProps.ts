export type ArticleProps = {
    id: number;
    body: string;
    title: string;
    userId: number;
    reactions: Reactions;
    tags: string[];
};

type Reactions = {
    likes: number;
    dislikes: number;
};

export type ArticleHeadProps = Omit<ArticleProps, "body" | "title" | "id">;
