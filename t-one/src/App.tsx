import { useState } from 'react'
import NavLink from './components/atoms/NavLink/NavLink'
import './App.css'
import { NavLinkLocation } from './types/NavLinkProps'

function App() {
    return (
        <>
            <h1>Vite + React</h1>
            <NavLink location={NavLinkLocation.Header} />
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
