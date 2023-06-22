import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from "../screens/HomeCss";
import { Grid,Box } from "@mui/material";

export default function Highlight1(){

    var classes = useStyles()

     

   var settings={
        //dots: true,
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
            <div style={{marginLeft:250,fontSize:20,fontWeight:600,marginBottom:20}}>
            Expertise
            </div>
          <div>
            We boast a team of highly skilled Advocates with extensive experience in their respective areas of law. 
                Their expertise ensures you receive top-notch legal guidance tailored to your specific needs
          </div>
          <img style={{width:'20px',marginLeft:600,marginTop:15}} src="./assets/quote2.svg" />
          </div>
          
          
          <div>
          <img style={{width:'20px'}} src="./assets/quote1.svg" />
          <div style={{marginLeft:250,fontSize:20,fontWeight:600,marginBottom:20}}>
          Track Record of Success
            </div>
            <div>
             We have a proven track record of achieving favourable outcomes for our clients.
                 Our history of successful cases demonstrates their ability to navigate complex legal issues effectively.
          </div>
          <img style={{width:'20px',marginLeft:600,marginTop:15}} src="./assets/quote2.svg" />
          </div>
          
         
          <div>
          <img style={{width:'20px'}} src="./assets/quote1.svg" />
          <div style={{marginLeft:250,fontSize:20,fontWeight:600,marginBottom:20}}>
          Client-Centred Approach
          </div>
          <div>
             We prioritise client satisfaction and aim to build long-lasting relationships.
                 We provide personalised attention, taking the time to understand your unique circumstances and develop strategies that align with your goals.
          </div>
          <img style={{width:'20px',marginLeft:600,marginTop:15}} src="./assets/quote2.svg" />
          </div>


          <div>
          <img style={{width:'20px'}} src="./assets/quote1.svg" />
         <div style={{marginLeft:250,fontSize:20,fontWeight:600,marginBottom:20}}>
         Comprehensive Services
         </div>
          <div>
            We offer a wide range of legal services, covering diverse practice areas.
                 Whether you require assistance with business law, personal injury, family law, or any other legal matter, we have the expertise to handle it effectively.
          </div>
          <img style={{width:'20px',marginLeft:600,marginTop:15}} src="./assets/quote2.svg" />
          </div>
         

          
          <div>
          <img style={{width:'20px'}} src="./assets/quote1.svg" />
          <div style={{marginLeft:250,fontSize:20,fontWeight:600,marginBottom:20}}>
          Strong Reputation
          </div>
          <div>
             We enjoy a strong reputation within the legal community and among past clients. We are known for our professionalism, integrity, and commitment for achieving the best possible results for their clients.
          </div>
          <img style={{width:'20px',marginLeft:600,marginTop:15}} src="./assets/quote2.svg" />
          </div>
         
          
        </Slider>
        
        </div>)
    }
    
    

    

    
