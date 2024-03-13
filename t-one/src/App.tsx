import { useState } from "react";
import NavLink from "./components/atoms/NavLink/NavLink";
import "./App.css";
import { LinkLocation } from "./types/LinkLocation";

function App() {
    return (
        <>
            <h1>Vite + React</h1>
            <NavLink location={LinkLocation.Header} link={""} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
