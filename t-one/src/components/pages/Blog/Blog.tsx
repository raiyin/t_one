import ArticlesPreview from '../../organisms/ArticlesPreview/ArticlesPreview'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import styles from './Blog.module.css'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { decrementPageNumber, incrementPageNumber } from '../../../store/slices/articlesSlice'
import { RootState } from '../../../store/store'
import { useEffect, useState } from 'react'
import { ArticleProps } from '../../../types/ArticleProps'
import PaginationArrows from '../../molecules/PaginationArrows/PaginationArrows'
import LoadingBlock from '../../organisms/LoadingBlock/LoadingBlock'

const Blog = () => {

    const postPerPage = 12;
    const articlesPageNumber = useAppSelector((state: RootState) => state.articles.pageNumber)
    const isBackPageExist = useAppSelector((state: RootState) => state.articles.isBackPageExist)
    const isForthPageExist = useAppSelector((state: RootState) => state.articles.isForthPageExist)
    const [articles, setArticles] = useState<ArticleProps[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()


    useEffect(() => {
        const fetchData = async (limit: number, skip: number) => {
            setIsLoading(_ => true)
            await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
                .then(response => response.json())
                .then(data => setArticles(data.posts))
            setIsLoading(_ => false)
        }
        fetchData(postPerPage, postPerPage * (articlesPageNumber - 1)).catch(console.error);
    }, [articlesPageNumber]);

    return (
        <>
            <Header />
            {isLoading
                ?
                <LoadingBlock />
                :
                <main>
                    <ArticlesPreview
                        articles={articles}
                        leftArrowIsEnable={isBackPageExist}
                        rightArrowIsEnable={isForthPageExist}
                    />

                    <div className={styles['arrows']}>
                        <PaginationArrows
                            leftArrowIsEnable={isBackPageExist}
                            rightArrowIsEnable={isForthPageExist}
                            leftArrowOnClick={() => dispatch(decrementPageNumber())}
                            rightArrowOnClick={() => dispatch(incrementPageNumber())}
                        />
                    </div>
                </main>
            }

            <Footer />
        </>
    )
}

export default Blog
