import AppBlock from "../../organisms/AppBlock/AppBlock";
import FaqBlock from "../../organisms/FaqBlock/FaqBlock";
import FeatureBlock from "../../organisms/FeaturesBlock/FeatureBlock";
import HeroBlock from "../../organisms/HeroBlock/HeroBlock";
import LunchBlock from "../../organisms/LunchBlock/LunchBlock";
import PurchasesBlock from "../../organisms/PurchaseBlock/PurchasesBlock";
import ReviewBlock from "../../organisms/ReviewBlock/ReviewBlock";

const Main = () => {
    return (
        <>
            <HeroBlock />
            <FeatureBlock />
            <AppBlock />
            <LunchBlock />
            <PurchasesBlock />
            <ReviewBlock />
            <FaqBlock />
        </>
    );
};

export default Main;
