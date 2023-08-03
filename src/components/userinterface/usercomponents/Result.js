import React from "react";
import { Grid, TextField, IconButton, Avatar, Button } from "@mui/material";
import { useStyles } from "../screens/HomeCss";
export default function Result(){

    var classes=useStyles()
    return( <div className={classes.mainContainer}>
        <div className={classes.box}>
            <Grid container spacing={2} style={{backgroundColor:'#dff9fb'}}>
                <Grid item xs={12} className={classes.rowStyle}>
                    <div className={classes.headingStyle } style={{fontSize:40}}>Result</div>
                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r1.png" style={{borderRadius:"50%"}}/>
                        <div>
                        EMPLOYEMENT LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r2.jpg" style={{borderRadius:"50%"}} />
                        <div>
                        INTELLECTUAL PROPERTY LAW
                        </div>
                    </div>

                    </Grid>

                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r3.png" style={{borderRadius:"50%"}}/>
                        <div>
                        INTERNATIONAL COMMERCIAL LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r4.jpg" style={{borderRadius:"50%"}} />
                        <div>
                       FLSA LITIGATION
                       </div>
                    </div>

                    </Grid>

                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r5.jpg" style={{borderRadius:"50%"}}/>
                        <div>
                        CORPORATE & BUSSINESS LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r6.jpg" style={{borderRadius:"50%"}} />
                        <div>
                       CORPORATE LITIGATION
                       </div>
                    </div>

                    </Grid>

                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r7.png" />
                        <div>
                         COMMERCIAL LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r8.jpg" style={{borderRadius:"50%"}} />
                        <div>
                       BUSSINESS AGREEMENTS
                       </div>
                    </div>

                    </Grid>
                    
                    </Grid>
                    </Grid>
                    </div>
                    </div>
                    )
}