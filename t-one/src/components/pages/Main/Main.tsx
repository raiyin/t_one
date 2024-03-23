import styles from './Main.module.css'
import Title from "../../atoms/Title/Title";
import AppBlock from "../../organisms/AppBlock/AppBlock";
import FaqBlock from "../../organisms/FaqBlock/FaqBlock";
import FeatureBlock from "../../organisms/FeaturesBlock/FeatureBlock";
import HeroBlock from "../../organisms/HeroBlock/HeroBlock";
import LunchBlock from "../../organisms/LunchBlock/LunchBlock";
import PurchasesBlock from "../../organisms/PurchaseBlock/PurchasesBlock";
import ReviewBlock from "../../organisms/ReviewBlock/ReviewBlock";
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

const Main = () => {
    return (
        <>
            <Header />
            <HeroBlock />
            <FeatureBlock />
            <AppBlock />
            <LunchBlock />
            <PurchasesBlock />
            <div className={styles['review_title_wrapper']}>
                <Title
                    text={'Customer Say'}
                    selectStart={0}
                    selectEnd={8}
                    fontSize={45}
                    fontWeight={600}
                    lineHeight={26}
                />
            </div>
            <ReviewBlock direction={'row'} comments={[]} />
            <FaqBlock />
            <Footer />
        </>
    );
};

export default Main;
