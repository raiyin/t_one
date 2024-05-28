import styles from "./styles.module.css";
import { Suspense, lazy } from 'react';
import Title from "@/components/atoms/Title";
import HeroBlock from "@/components/organisms/HeroBlock";

const FaqBlock = lazy(() => import('@/components/organisms/FaqBlock'));
const FeatureBlock = lazy(() => import('@/components/organisms/FeaturesBlock'));
const AppBlock = lazy(() => import('@/components/organisms/AppBlock'));
const LunchBlock = lazy(() => import('@/components/organisms/LunchBlock'));
const PurchasesBlock = lazy(() => import('@/components/organisms/PurchaseBlock'));

import ReviewBlock from "@/components/organisms/ReviewBlock";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { useEffect, useState } from "react";
import { FeatureProps } from "@/types/FeatureProps";
import featureJsonData from "@data/feature_data.json";
import LoadingBlock from "@/components/organisms/LoadingBlock";
import { TitleType } from "@/types/TitleProps";

const Main = () => {
    const [comments, setComments] = useState([]);
    const [featureData] = useState<FeatureProps[]>(featureJsonData["features"]);
    const [commentsError, setCommentsError] = useState(false);
    const [commentsLoading, setCommentsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://dummyjson.com/comments?limit=6`)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting comments');
                })
                .then((data) => {
                    setComments(data.comments);
                    setCommentsError(false);
                }).catch((e) => {
                    console.error(e);
                    setCommentsError(true);
                });
        };
        setCommentsLoading(() => true);
        fetchData();
        setCommentsLoading(() => false);
    }, []);

    return (
        <>
            <Header />

            <HeroBlock />

            <Suspense fallback={<LoadingBlock />}>
                <FeatureBlock features={featureData} />
            </Suspense>

            <Suspense fallback={<LoadingBlock />}>
                <AppBlock />
            </Suspense>

            <Suspense fallback={<LoadingBlock />}>
                <LunchBlock />
            </Suspense>

            <Suspense fallback={<LoadingBlock />}>
                <PurchasesBlock />
            </Suspense>

            {
                commentsLoading
                    ?
                    <LoadingBlock />
                    :
                    !commentsError && <>
                        <div className={styles["main__reviews-title"]}>
                            <Title
                                text={"Customer Say"}
                                selectStart={0}
                                selectEnd={8}
                                titleType={TitleType.H3}
                                hideOverflow={false}
                            />
                        </div>
                        <ReviewBlock direction={"row"} comments={comments} />
                    </>
            }
            <Suspense fallback={<LoadingBlock />}>
                <FaqBlock />
            </Suspense>

            <Footer />
        </>
    );
};

export default Main;
