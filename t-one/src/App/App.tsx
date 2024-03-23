import "../assets/styles/reset.css"
import "../assets/styles/App.css";
import styles from './App.module.css'
import { RouterProvider } from "react-router-dom";
import router from "../routes/routes";

function App() {
    return (
        <div className={styles["main-container"]}>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
