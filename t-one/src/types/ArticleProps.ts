export type ArticleProps = {
    article_text: string;
    article_title: string;
    author: string;
    ava_url: string;
    rating: string;
    hashtag: string;
};

export type ArticleHeadProps = Omit<ArticleProps, "article_text" | "article_title">
