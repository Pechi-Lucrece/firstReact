import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    //etat du background initialisé à la couleur noir
    const [darkMode, setDarkMode] = React.useState(true)
    
    //fonction qui permet de faire basculer la couleur du background
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode} />
        </div>
    )
}