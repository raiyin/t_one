import ArticlesPreview from '@/components/organisms/ArticlesPreview';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import styles from './styles.module.css';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { decrementPageNumber, incrementPageNumber } from '@store/slices/articlesSlice';
import { RootState } from '@store/store';
import { useEffect, useState } from 'react';
import { ArticleProps } from '@types/ArticleProps';
import PaginationArrows from '@/components/molecules/PaginationArrows';
import LoadingBlock from '@/components/organisms/LoadingBlock';
import ErrorBlock from '@/components/organisms/ErrorBlock';

const Blog = () => {

    const postPerPage = 12;
    const articlesPageNumber = useAppSelector((state: RootState) => state.articles.pageNumber);
    const isBackPageExist = useAppSelector((state: RootState) => state.articles.isBackPageExist);
    const isForthPageExist = useAppSelector((state: RootState) => state.articles.isForthPageExist);
    const [articles, setArticles] = useState<ArticleProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async (limit: number, skip: number) => {
            setIsLoading(_ => true);

            await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting posts');
                })
                .then(data => {
                    setArticles(data.posts);
                    setError(false);
                })
                .catch((e) => {
                    console.error(e);
                    setError(true);
                });

            setIsLoading(_ => false);
        };
        fetchData(postPerPage, postPerPage * (articlesPageNumber - 1));
    }, [articlesPageNumber]);

    return (
        <>
            <Header />
            {isLoading
                ?
                <LoadingBlock />
                :
                error
                    ?
                    <ErrorBlock errorText={'Oooops!!! Error fetching posts...'} />
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
    );
};

export default Blog;
