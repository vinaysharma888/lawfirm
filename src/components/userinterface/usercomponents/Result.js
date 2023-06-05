import React from "react";
import { Grid, TextField, IconButton, Avatar, Button } from "@mui/material";
import { useStyles } from "../screens/HomeCss";
export default function Result(){

    var classes=useStyles()
    return( <div className={classes.mainContainer}>
        <div className={classes.box}>
            <Grid container spacing={2}>
                <Grid item xs={12} className={classes.rowStyle}>
                    <div className={classes.headingStyle } style={{fontSize:40}}>Results</div>
                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r1.png" />
                        <div>
                        EMPLOYEMENT LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r2.jpg" />
                        <div>
                        INTELLECTUAL PROPERTY LAW
                        </div>
                    </div>

                    </Grid>

                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r3.png" />
                        <div>
                        INTERNATIONAL COMMERCIAL LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r4.jpg" />
                        <div>
                       FLSA LITIGATION
                       </div>
                    </div>

                    </Grid>

                    <Grid item xs={3} style={{marginTop:100,fontWeight:600,marginRight:70}}>
                    <div style={{textAlign:'center',marginBottom:80}}>
                        <img src="/assets/r5.jpg" />
                        <div>
                        CORPORATE & BUSSINESS LAW
                        </div>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <img src="/assets/r6.jpg" />
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
                        <img src="/assets/r8.jpg" />
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