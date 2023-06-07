import React from "react";
import { Grid } from "@mui/material";
import { useStyles } from "../screens/HomeCss";

export default function Highlight2(){
   
    var classes = useStyles()
    return(<div className={classes.mainContainer}>
        <div className={classes.box}>
         <Grid container spacing={2}>
                <Grid item xs={12} className={classes.rowStyle}>
                    

                    <Grid item xs={4}>
                     <img style={{marginTop:100,marginBottom:50}}src="./assets/about.png" />
                    </Grid>
                    <Grid item xs={6} >
                    <div style={{fontSize:40,fontWeight:700,marginTop:100,marginBottom:50,marginLeft:250}}>
                        About Us
                      </div>
                      <div>
                      Welcome to Friends and Associates, a dynamic and client-focused law firm that values the power of collaboration and the strength of relationships. We pride ourselves on building enduring connections with our clients, treating them not only as valued partners but as trusted friends.At Friends and Associates, we believe that legal representation should go beyond just providing sound advice and advocacy. We strive to create a welcoming and supportive environment where our clients feel comfortable sharing their concerns, dreams, and aspirations.
                       We understand that each client's situation is unique, and we are committed to tailoring our services to meet their specific needs.
                      </div>
                    </Grid>
                    
                    </Grid>
                    </Grid>
    </div>
    </div>
    )

}