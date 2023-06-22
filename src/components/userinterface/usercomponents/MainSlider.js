import React,{createRef} from "react";
import { Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";
import Appointment from "./Appointment";
import "./contact.css";

export default function MainSlider(){

    const navigate=useNavigate()

    
   var settings={
        dots: false,
        infinite: true,
        speed : 100,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        autoplayspeed: 3000
    }
    
    var slider = createRef()
    var images=['a1.jpg','a2.jpg','a3.jpg','a4.jpg']

    

    function playImages()
    {
        return images.map((item)=>{

            return (<div style={{display:'flex', alignItems:'center',justifyContent:'center'}}> <img style={{width:'100%',height:500}} src={`assets/${item}`}/></div>)
        })
    }

    function handleLeftClick() {
        slider.current.slickPrev()
    }

    function handleRightClick() {
        slider.current.slickNext()
    }

    return(
       
              <div style={{position:'relative'}}>
      <KeyboardArrowLeftIcon onClick={handleLeftClick} style={{ position: 'absolute', left: 10, top:'50%', zIndex: 1, cursor: 'pointer', borderRadius: '50px', borderWidth: "2", borderStyle: 'solid', borderColor: "#e0e0e0", boxSizing: 'border-box', backgroundColor: 'red' }} />
        
        <div class="container">
        <Slider ref={slider} {...settings} >
        {playImages()} 
        </Slider>
  <button class="btn"  onClick={() => navigate('/Appointment')}>Make An Appointment</button>
</div>
            
            
        
    <KeyboardArrowRightIcon onClick={handleRightClick} style={{ position: 'absolute', right: 10, top: '50%', zIndex: 1, cursor: 'pointer', borderRadius: '50px', borderWidth: "2", borderStyle: 'solid', borderColor: "#e0e0e0", boxSizing: 'border-box', backgroundColor: 'red' }} />
    </div>
                   
                    
            
       
    )
}