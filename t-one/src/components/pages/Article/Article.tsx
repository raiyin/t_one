import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowDirection } from '../../../types/ArrowProps'
import { ArticleProps } from '../../../types/ArticleProps'
import ButtonType from '../../../types/ButtonProps'
import { Comment } from '../../../types/Comment'
import Button from '../../atoms/Button/Button'
import Title from '../../atoms/Title/Title'
import AddComment from '../../molecules/AddComment/AddComment'
import ArticleBlock from '../../organisms/ArticleBlock/Article'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import LoadingBlock from '../../organisms/LoadingBlock/LoadingBlock'
import ReviewBlock from '../../organisms/ReviewBlock/ReviewBlock'
import styles from './Article.module.css'
import Alert from '../../molecules/Alert/Alert'
import { AlertType } from '../../../types/AlertProps'
import ErrorBlock from '../../organisms/ErrorBlock/ErrorBlock'

const Article = () => {

    const navigate = useNavigate();
    const { post_id } = useParams();
    const [alertShow, setAlertShow] = useState(false);
    const [article, setArticle] = useState<ArticleProps>({ id: 0, userId: 0, body: '', title: '', tags: [], reactions: '0' })
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [postError, setPostError] = useState(false)
    const [commentsError, setCommentsError] = useState(false)

    // Test user to load article. As was said on the lection.
    const USER_ID = 5;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(_ => true)
            await fetch(`https://dummyjson.com/posts/${post_id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting post')
                })
                .then(data => {
                    setArticle(data);
                    setPostError(false)
                }).catch((e) => {
                    console.error(e)
                    setPostError(true)
                })

            await fetch(`https://dummyjson.com/comments/post/${post_id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting comments')
                })
                .then(data => {
                    setComments(data.comments);
                    setCommentsError(false)
                }).catch((e) => {
                    console.error(e)
                    setCommentsError(true)
                })

            setIsLoading(_ => false)
        }
        fetchData();
    }, []);

    const onAllArticlesButtonClick = () => {
        navigate('/blog');
    }

    async function addComment(commentBody: string): Promise<boolean> {
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
            setAlertShow(true)
            return false;
        }

        const comment = await response.json();
        setComments([...comments, comment])
        return true;
    }

    return (
        <>
            <Header />
            {isLoading
                ?
                <LoadingBlock />
                :
                postError
                    ?
                    <ErrorBlock
                        errorText='Oooops!!! Error fetching post information...'
                    />
                    :
                    <main>

                        <ArticleBlock
                            id={article.id}
                            userId={article.userId}
                            body={article.body}
                            title={article.title}
                            reactions={article.reactions}
                            tags={article.tags}
                        />


                        <div className={styles['back-button']}>
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
                                    <div className={styles['comments-block']}>

                                        <Title
                                            text={'Comments'}
                                            selectStart={0}
                                            selectEnd={0}
                                            fontSize={30}
                                            fontWeight={600}
                                            lineHeight={45}
                                            hideOverflow={false}
                                        />

                                        <div className={styles['commets']}>
                                            <ReviewBlock direction={'column'} comments={comments} />

                                        </div>
                                    </div>

                                    <div className={styles['commets-add']}>
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


                    </main>
            }
            <Footer />
            <div className={styles['alert']}>
                <Alert
                    type={AlertType.error}
                    text={"Couldn't add a comment. Try again later."}
                    show={alertShow}
                    setShow={setAlertShow}
                />
            </div>
        </>
    )
}

export default Article
