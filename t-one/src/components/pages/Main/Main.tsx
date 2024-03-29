import styles from "./Main.module.css";
import Title from "../../atoms/Title/Title";
import AppBlock from "../../organisms/AppBlock/AppBlock";
import FaqBlock from "../../organisms/FaqBlock/FaqBlock";
import FeatureBlock from "../../organisms/FeaturesBlock/FeatureBlock";
import HeroBlock from "../../organisms/HeroBlock/HeroBlock";
import LunchBlock from "../../organisms/LunchBlock/LunchBlock";
import PurchasesBlock from "../../organisms/PurchaseBlock/PurchasesBlock";
import ReviewBlock from "../../organisms/ReviewBlock/ReviewBlock";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import { useEffect, useState } from "react";
import { FeatureProps } from "../../../types/FeatureProps";
import featureJsonData from "../../../data/feature_data.json";

const Main = () => {
    const [comments, setComments] = useState([]);
    const [featureData] = useState<FeatureProps[]>(featureJsonData["features"]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://dummyjson.com/comments?limit=6`)
                .then((response) => response.json())
                .then((data) => setComments(data.comments));
        };
        fetchData().catch(console.error);
    }, []);

    return (
        <>
            <Header />
            <HeroBlock />
            <FeatureBlock features={featureData} />
            <AppBlock />
            <LunchBlock />
            <PurchasesBlock />
            <div className={styles["review_title_wrapper"]}>
                <Title
                    text={"Customer Say"}
                    selectStart={0}
                    selectEnd={8}
                    fontSize={45}
                    fontWeight={600}
                    lineHeight={26}
                    hideOverflow={false}
                />
            </div>
            <ReviewBlock direction={"row"} comments={comments} />
            <FaqBlock />
            <Footer />
        </>
    );
};

export default Main;
