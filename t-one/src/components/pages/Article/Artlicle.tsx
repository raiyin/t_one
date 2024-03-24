import styles from './Article.module.css'
import ButtonType from '../../../types/ButtonProps'
import Button from '../../atoms/Button/Button'
import Article from '../../organisms/Article/Article'
import ReviewBlock from '../../organisms/ReviewBlock/ReviewBlock'
import { ArrowDirection } from '../../../types/ArrowProps'
import Header from '../../organisms/Header/Header'
import Footer from '../../organisms/Footer/Footer'
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { ArticleProps } from '../../../types/ArticleProps'
import LoadingBlock from '../../organisms/LoadingBlock/LoadingBlock'
import Title from '../../atoms/Title/Title'

const Artlicle = () => {

    const navigate = useNavigate();
    const { post_id } = useParams();
    const [article, setArticle] = useState<ArticleProps>({ id: 0, userId: 0, body: '', title: '', tags: [], reactions: '0' })
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <>
            <Header />
            {isLoading
                ?
                <LoadingBlock />
                :
                <>

                    <Article
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

                    <div className={styles['comments-title']}>
                        <Title
                            text={'Comments'}
                            selectStart={0}
                            selectEnd={0}
                            fontSize={30}
                            fontWeight={600}
                            lineHeight={45}
                            hideOverflow={false}
                        />
                    </div>

                    <ReviewBlock direction={'column'} comments={comments} />

                </>
            }
            <Footer />
        </>
    )
}

export default Artlicle
