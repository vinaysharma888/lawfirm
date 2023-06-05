import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from "./Boxsx";
import { Grid,Box } from "@mui/material";

export default function Highlight(){

    var classes = useStyles()

     

   var settings={
        dots: true,
        infinite: true,
        speed : 500,
        slidesToShow:2,
        slidesToScroll:2,
        autoplay:true,
        autoplaySpeed:3000,     
        arrows: false,
    };
    
        return(<div  style={{marginBottom:50,alignItems:'center',flexWrap:'wrap',marginLeft:"6%"}}>
            <div style={{display:'flex',marginTop:30,fontSize:30,fontWeight:700,marginBottom:30}}> Why Us?</div>
        <Slider {...settings}>
           <div >
            <img style={{width:'20px'}} src="./assets/quote1.svg" />
          <div>
            Expertise:We boast a team of highly skilled Advocates with extensive experience in their respective areas of law. 
                Their expertise ensures you receive top-notch legal guidance tailored to your specific needs
          </div>
          </div>
          
          
          <div>
            Track Record of Success: We have a proven track record of achieving favourable outcomes for our clients.
                 Our history of successful cases demonstrates their ability to navigate complex legal issues effectively.
          </div>
          
         
          <div>
            Client-Centred Approach: We prioritise client satisfaction and aim to build long-lasting relationships.
                 We provide personalised attention, taking the time to understand your unique circumstances and develop strategies that align with your goals.
          </div>
          <div>
            Comprehensive Services:We offer a wide range of legal services, covering diverse practice areas.
                 Whether you require assistance with business law, personal injury, family law, or any other legal matter, we have the expertise to handle it effectively.
          </div>
          <div>
            Strong Reputation: We enjoy a strong reputation within the legal community and among past clients. We are known for our professionalism, integrity, and commitment for achieving the best possible results for their clients.
          </div>
         
          
        </Slider>
        
        </div>)
    }
    
    

    

    
