import AppBlock from "../../organisms/AppBlock/AppBlock";
import FeatureBlock from "../../organisms/FeaturesBlock/FeatureBlock";
import Header from "../../organisms/Header/Header";
import HeroBlock from "../../organisms/HeroBlock/HeroBlock";
import LunchBlock from "../../organisms/LunchBlock/LunchBlock";
import PurchasesBlock from "../../organisms/PurchaseBlock/PurchasesBlock";
import ReviewBlock from "../../organisms/ReviewBlock/ReviewBlock";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div className={styles["main-container"]}>
            <Header />
            <HeroBlock />
            <FeatureBlock />
            <AppBlock />
            <LunchBlock />
            <PurchasesBlock />
            <ReviewBlock />
        </div>
    );
};

export default Main;
