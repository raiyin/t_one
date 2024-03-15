import Header from "../../organisms/Header/Header";
import HeroBlock from "../../organisms/HeroBlock/HeroBlock";
import styles from "./Main.module.css";

const Main = () => {
    return (
        <div className={styles["main-container"]}>
            <Header />
            <HeroBlock />
        </div>
    );
};

export default Main;
