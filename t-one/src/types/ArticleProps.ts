export type ArticleProps = {
    body: string;
    title: string;
    author: string;
    ava_url: string;
    reactions: string;
    tags: string[];
};

export type ArticleHeadProps = Omit<ArticleProps, "body" | "title">
export type ArticleWidgetProps = Omit<ArticleProps, "ava_url" | "author">
