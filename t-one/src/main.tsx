import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import {
    AnchorProvider,
} from "react-anchor-navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AnchorProvider>
                <App />
            </AnchorProvider>
        </Provider>
    </React.StrictMode>
);
