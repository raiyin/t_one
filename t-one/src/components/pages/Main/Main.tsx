import AppBlock from "../../organisms/AppBlock/AppBlock";
import FaqBlock from "../../organisms/FaqBlock/FaqBlock";
import FeatureBlock from "../../organisms/FeaturesBlock/FeatureBlock";
import Footer from "../../organisms/Footer/Footer";
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
            <FaqBlock />
            <Footer />
        </div>
    );
};

export default Main;
