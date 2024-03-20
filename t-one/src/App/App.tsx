import "../assets/styles/reset.css"
import "../assets/styles/App.css";
import styles from './App.module.css'
import { RouterProvider } from "react-router-dom";
import router from "../routes/routes";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";

function App() {
    return (
        <div className={styles["main-container"]}>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
}

export default App;
