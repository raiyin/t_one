import Button from '@/components/atoms/Button';
import Title from '@/components/atoms/Title';
import AddComment from '@/components/molecules/AddComment';
import Alert from '@/components/molecules/Alert';
import ArticleBlock from '@/components/organisms/ArticleBlock';
import ErrorBlock from '@/components/organisms/ErrorBlock';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import LoadingBlock from '@/components/organisms/LoadingBlock';
import ReviewBlock from '@/components/organisms/ReviewBlock';
import { TitleType } from '@/types/TitleProps';
import { AlertType } from '@/types/AlertProps';
import { ArrowDirection } from '@/types/ArrowProps';
import { ArticleProps } from '@/types/ArticleProps';
import ButtonType from '@/types/ButtonProps';
import { Comment } from '@/types/Comment';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles.module.css';

const Article = () => {

    const navigate = useNavigate();
    const { post_id } = useParams();
    const [alertShow, setAlertShow] = useState(false);
    const [article, setArticle] = useState<ArticleProps>({ id: 0, userId: 0, body: '', title: '', tags: [], reactions: { likes: 0, dislikes: 0 } });
    const [comments, setComments] = useState<Comment[]>([]);
    const [isPageLoading, setIsPageLoading] = useState(false);
    const [postError, setPostError] = useState(false);
    const [commentsError, setCommentsError] = useState(false);

    // Test user to load article. As was said on the lection.
    const USER_ID = 5;

    useEffect(() => {
        const fetchData = async () => {
            setIsPageLoading(() => true);
            await fetch(`https://dummyjson.com/posts/${post_id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting post');
                })
                .then(data => {
                    setArticle(data);
                    setPostError(false);
                }).catch((e) => {
                    console.error(e);
                    setPostError(true);
                });

            await fetch(`https://dummyjson.com/comments/post/${post_id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting comments');
                })
                .then(data => {
                    setComments(data.comments);
                    setCommentsError(false);
                }).catch((e) => {
                    console.error(e);
                    setCommentsError(true);
                });

            setIsPageLoading(() => false);
        };
        fetchData();
    }, [post_id]);

    const onAllArticlesButtonClick = () => {
        navigate('/blog');
    };

    async function addComment(commentBody: string): Promise<boolean> {

        if (commentBody == null || (typeof commentBody === "string" && commentBody.trim().length === 0)) {
            return false;
        }


        const response = await fetch('https://dummyjson.com/comments/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                body: commentBody,
                postId: post_id,
                userId: USER_ID,
            })
        });

        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            console.error(message);
            setAlertShow(true);
            return false;
        }

        const comment = await response.json();
        setComments([...comments, comment]);
        return true;
    }

    return (
        <>
            <Header />

            {isPageLoading
                ?
                <LoadingBlock />
                :
                postError
                    ?
                    <ErrorBlock
                        errorText='Oooops!!! Error fetching post information...'
                    />
                    :
                    <main className={styles['article-container']}>
                        <div className={styles['article']}>

                            <ArticleBlock
                                id={article.id}
                                userId={article.userId}
                                body={article.body}
                                title={article.title}
                                reactions={article.reactions}
                                tags={article.tags}
                            />


                            <div className={styles['article__back-button']}>
                                <Button
                                    type={ButtonType.Ghost}
                                    text={'All Articles'}
                                    needArrow={true}
                                    direction={ArrowDirection.Back}
                                    onClick={onAllArticlesButtonClick}
                                />
                            </div>

                            {
                                (!commentsError && !postError)
                                    ?
                                    <>
                                        <div className={styles['article__comments']}>

                                            <Title
                                                text={'Comments'}
                                                selectStart={0}
                                                selectEnd={0}
                                                titleType={TitleType.H5}
                                                hideOverflow={false}
                                            />

                                            <div className={styles['article__comments-items']}>
                                                <ReviewBlock direction={'column'} comments={comments} />

                                            </div>
                                        </div>

                                        <div className={styles['article__comments-addition']}>
                                            <AddComment
                                                placeholder={'Enter your comment'}
                                                buttonAction={addComment}
                                            />
                                        </div>
                                    </>
                                    :

                                    <ErrorBlock
                                        errorText='Oooops!!! Error fetching comments...'
                                    />
                            }
                        </div>


                    </main>
            }

            <Footer />

            <div className={styles['main__alert']}>
                <Alert
                    type={AlertType.error}
                    text={"Couldn't add a comment. Try again later."}
                    show={alertShow}
                    setShow={setAlertShow}
                />
            </div>
        </>
    );
};

export default Article;
