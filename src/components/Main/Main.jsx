import React,{useEffect} from "react";
import './main.css';
import img from '../../Assets/g.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img2 from '../../Assets/r.jpg'
import img3 from '../../Assets/r.jpg'
import img4 from '../../Assets/r.jpg'
import img5 from '../../Assets/r.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
       id:1,
       imgSrc: img,
       destTitle: 'Bora Bora',
       location: 'New Zealand',
       grade: 'CULTURAL RELAX',
       fees: '$700',
       description: 'reatrfasgsgsegsdg' 
    },

    {
        id:2,
        imgSrc: img2,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'reatrfasgsgsegsdg' 
     },

     {
        id:3,
        imgSrc: img3,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'reatrfasgsgsegsdg' 
     },


     {
        id:4,
        imgSrc: img4,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'reatrfasgsgsegsdg' 
     },


     {
        id:5,
        imgSrc: img5,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'reatrfasgsgsegsdg' 
     },

     

]

const Main = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return(
        <section className="main  container section">
           <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destination 
            </h3>
           </div>
           <div className="secContent grid">
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                    return(
                        <div key={id} data-aos="fade-up" className="singleDestination"> 
                        <div className="imageDiv"> 
                            <img src={imgSrc} alt={destTitle}/>
                        </div>
                        <div className="cardInfo">
                          <h4 className="destTitle">{destTitle}
                            </h4> 
                            <span className="continent flex">
                            <HiOutlineLocationMarker className='icon'/>
                               <span className="name">{location}</span>
                                </span> 
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small>
                                        </span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>
                            
                           <div className="desc">
                            <p>{description}</p>
                           </div>

                           <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className="icon"/>
                           </button>

                        </div>
                        </div>
                    )
                })
            }
           </div>
        </section>
        
    )
}
export default Main 