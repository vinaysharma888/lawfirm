import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MainSlider(){
   /*var settings={
        dots: true,
        infinite: true,
        speed : 500,
        slidesToShow:1,
        slidesToScroll:1
    };*/

    var images=['law4.jpg',]

    function playImages()
    {
        return images.map((item)=>{

            return (<div style={{display:'flex', alignItems:'center',justifyContent:'center'}}> <img style={{width:'90%',height:500}} src={`assets/${item}`}/></div>)
        })
    }

    return(
       <div >
            
             
                    {playImages()}
               
                    </div>     
            
       
    )
}