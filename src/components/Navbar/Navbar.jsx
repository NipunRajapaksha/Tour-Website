import React,{useState} from "react";
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai'
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar')
// Function to toggle navBar
    const showNav = ()=>{
        setActive('navBar activeNavbar')
    }
// Function to remove navBar
    const removeNavbar = ()=>{
        setActive('navBar')
    }
    return(
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                <img src="/images/i.png" alt="Logo" className="navbar-logo" />
                    <a href="#" className="logo flex">
                        <h1>UK Tours</h1>
                    </a>
                </div>
                <div className={active}>

                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">ContactUs</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Services</a>
                        </li>

                        <button className='btn'>
                            <a href="#">Book Now</a>
                        </button>

                    </ul>
                    <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle />
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className="icon" />

                </div>
            </header>

        </section>
    )
}
export default Navbar