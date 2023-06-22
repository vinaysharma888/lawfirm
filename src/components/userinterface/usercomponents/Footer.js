import { Facebook, Instagram, LinkedIn, ShowChart, Twitter } from "@mui/icons-material";
import { Divider, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import ShopIcon from "@mui/icons-material/Shop";
import AppleIcon from "@mui/icons-material/Apple";
import AttachFileSharpIcon from '@mui/icons-material/AttachFileSharp';
import HeadsetMicSharpIcon from '@mui/icons-material/HeadsetMicSharp';
import { useStyles } from "../screens/HomeCss";
export default function Footer() {
     
  var classes = useStyles()
  return (
    
      <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.rowStyle} style={{backgroundColor:'#0f1e33' }}>
                      <Grid item xs={4} >
                      
            
                      <Box style={{marginLeft:20}}>
                      <img src="/assets/logo.jpg" style={{margin:3,width:'150',height:70,borderRadius:'50%'}} />
            <div style={{flexDirection:'row',fontSize:30,color:'blue',fontFamily:'fantasy',margin:5}}>
            
             <u> OSCODE LAW FIRM</u>
             </div>
              <div style={{ fontSize: 14,color:'#dff9fb'}}>Beacon Law Group was built on the idea that sophisticated legal services should be convenient, modern and affordable.
               State-of-the-art practice technology allows us to serve our clients efficiently.
                We put our clients first and achieve tremendous results. Experience how law can be done better.
                </div>

            <div style={{marginTop:20,justifyContent:'space-evenly'}}>
              <Facebook style={{width:40,height:40,color:'#dff9fb'}} />
              <Instagram style={{width:40,height:40,color:'#dff9fb'}}/>
              <LinkedIn style={{width:40,height:40,color:'#dff9fb'}} />
            </div>
          </Box>
                     
                      </Grid>

                      <Grid item xs={4}>
                        <Box>
                         
                      <div style={{fontWeight:700,color:'#dff9fb'}}> <AttachFileSharpIcon style={{fontSize:18,marginRight:5,color:'#dff9fb'}}/>SITE MAP</div>
                     
                      <div style={{marginBottom:10,color:'#dff9fb'}}>Quickly navigate our site through our sitemap below!</div>
                      <div style={{color:'#dff9fb'}}>HOME</div>
                      <div style={{color:'#dff9fb'}}>PRACTICE AREAS</div>
                      <div style={{color:'#dff9fb'}}>OUR ATTORNEYS</div>
                      <div style={{color:'#dff9fb'}}>CONTACT US</div>
                      <div style={{color:'#dff9fb'}}>CASE EVALUATION</div>
                      <div style={{color:'#dff9fb'}}>PRIVACY POLICY</div>
                      
                      </Box>
                      </Grid>

                      <Grid item xs={4}>
                        <Box style={{marginRight:20}}>
                      <div style={{fontWeight:700,marginBottom:15,color:'#dff9fb'}}><HeadsetMicSharpIcon style={{fontSize:18,marginRight:5,color:'#dff9fb'}}/>GOT A QUESTION?</div>
                      <div style={{marginBottom:15,color:'#dff9fb'}}>
                        <TextField fullWidth label="Your Email Address" variant="outlined" style={{color:'#dff9fb'}}></TextField>
                      </div>

                      <div >
                        <TextField fullWidth label="Describe Your Case Briefly" variant="outlined" style={{color:'#dff9fb'}}></TextField>
                      </div>
                      </Box>
                      </Grid>
                      

                      </Grid>
                      </Grid>
                      </div>
                      </div>
  )
}