import React from "react";
import './footer.css';
import video2 from '../../Assets/1.mp4'
import {FiSend} from 'react-icons/fi' 
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const Footer = () => {
    return(
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} loop autoPlay muted type="video/mp4">
                </video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                    <input type="text" placeholder='Enter Email Address'/>
                    <button className="btn flex" type="submit">
                        SEND <FiSend className="icon"/>
                    </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#"  className='logo flex'>
                            <MdOutlineTravelExplore  className="icon"/> Travel.
                            </a>
                        </div>

                        <div className="footerParagraph">
                            fgsdgasgsgsgwsgsgsdgdsgsdgsgasgfsgsgsga
                            The href attribute requires a valid value
                             to be accessible. 
                            Provide a valid, navigable
                        </div>

                        <div className="footerSocials">
                        <AiOutlineTwitter className="icon"/>
                        <AiFillYoutube className="icon" />
                        <AiFillInstagram className="icon"/>
                        
                        </div>
                    </div>

                    <div className="footerLinks grid">
                    <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Services
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Insurance
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Agency
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Tourisum
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                            </li>



                            
                        </div>
                    <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Services
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Insurance
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Agency
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Tourisum
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                            </li>



                            
                        </div>

                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Services
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Insurance
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Agency
                            </li>
                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Tourisum
                            </li>

                            <li className="footerList flex">
                            <FiChevronRight className="icon" />
                            Payment
                            </li>



                            
                        </div>
                    </div>

                    <div className="footerDiv flex">
                        <small>BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED - ISRATECH 2022 </small>
                

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer 