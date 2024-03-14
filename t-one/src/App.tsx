import { useState } from "react";
import NavLink from "./components/atoms/NavLink/NavLink";
import "./App.css";
import LinkLocation from "./types/LinkLocation";
import NavBar from "@components/molecules/NavBar/NavBar";
import Logo from "@components/atoms/Logo/Logo";
import Header from "@components/organisms/Header/Header";
import H1Title from "./components/atoms/H1Title/H1Title";
import Button from "./components/atoms/Button/Button";
import ButtonType from "./types/ButtonProps";
import WidgetTitle from "./components/atoms/WidgetTitle/WidgetTitle";
import Time from "./components/atoms/Time/Time";

function App() {
    return (
        <>
            <h1>Vite + React</h1>
            <Time time="3:05 PM" />
            <WidgetTitle />

            <H1Title
                text={"Some selected text"}
                selectStart={5}
                selectEnd={13}
            />

            <Button type={ButtonType.Primary} text={"Go Pro"} />

            <Header text={"Hi"} selectStart={0} selectEnd={0} />

            <Logo />

            <NavLink
                location={LinkLocation.Header}
                link={"http://mail.ru"}
                content={"Mail.ru site"}
            />

            <NavBar
                location={LinkLocation.Header}
                links={[
                    {
                        location: LinkLocation.Header,
                        link: "https://mail.ru",
                        content: "Mail.ru site",
                    },
                    {
                        location: LinkLocation.Header,
                        link: "https://ya.ru",
                        content: "ya.ru site",
                    },
                ]}
            />
        </>
    );
}

export default App;
