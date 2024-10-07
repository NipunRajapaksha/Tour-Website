import React from "react";
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import './app.css';

const App = () => {
    return(
        <>
        <Navbar/>
       <Home/>
        <Main/>
       {/* <Footer/>*/}

        </>
    )
}
export default App
