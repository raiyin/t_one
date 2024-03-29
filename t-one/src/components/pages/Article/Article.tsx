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

const Article = () => {

    const navigate = useNavigate();
    const { post_id } = useParams();
    const [alertShow, setAlertShow] = useState(false);
    const [article, setArticle] = useState<ArticleProps>({ id: 0, userId: 0, body: '', title: '', tags: [], reactions: '0' })
    const [comments, setComments] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const USER_ID = 5;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(_ => true)
            await fetch(`https://dummyjson.com/posts/${post_id}`)
                .then(response => response.json())
                .then(data => setArticle(data))

            await fetch(`https://dummyjson.com/comments/post/${post_id}`)
                .then(response => response.json())
                .then(data => setComments(data.comments))

            setIsLoading(_ => false)
        }
        fetchData().catch(console.error);
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
                <>

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

                    <div className={styles['comments']}>

                        <div className={styles['comments-title']}>
                        </div>
                        <Title
                            text={'Comments'}
                            selectStart={0}
                            selectEnd={0}
                            fontSize={30}
                            fontWeight={600}
                            lineHeight={45}
                            hideOverflow={false}
                        />

                        <ReviewBlock direction={'column'} comments={comments} />
                    </div>

                    <div className={styles['commets-add']}>
                        <AddComment
                            placeholder={'Enter your comment'}
                            buttonAction={addComment}
                        />
                    </div>

                </>
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
