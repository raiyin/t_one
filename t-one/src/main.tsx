import React from "react";
import {
    AnchorProvider,
} from "react-anchor-navigation";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import router from "@routes/";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AnchorProvider>
                <RouterProvider router={router} />
            </AnchorProvider>
        </Provider>
    </React.StrictMode>
);
