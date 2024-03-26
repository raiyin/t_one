export type ArticleProps = {
    id: number;
    body: string;
    title: string;
    userId: number;
    reactions: string;
    tags: string[];
};

export type ArticleHeadProps = Omit<ArticleProps, "body" | "title" | "id">
//export type ArticleWidgetProps = Omit<ArticleProps, "userId">
