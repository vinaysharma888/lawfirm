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
                    <Grid item xs={12} className={classes.rowStyle} style={{backgroundColor:'#c7ecee'}}>
                      <Grid item xs={4} >
                      
            
                      <Box style={{marginLeft:20}}>
                      <img src="/assets/logo.jpg" style={{margin:3,color:'#c7ecee',width:'150',height:70}} />
            <div style={{flexDirection:'row',fontSize:30,color:'blue',fontFamily:'fantasy',margin:5}}>
            
             <u> BEACON LAW FIRM</u>
             </div>
              <div style={{ fontSize: 14,color:'#2980b9'}}>Beacon Law Group was built on the idea that sophisticated legal services should be convenient, modern and affordable.
               State-of-the-art practice technology allows us to serve our clients efficiently.
                We put our clients first and achieve tremendous results. Experience how law can be done better.
                </div>

            <div style={{marginTop:20,justifyContent:'space-evenly'}}>
              <Facebook style={{width:40,height:40,color:"#1e90ff"}} />
              <Instagram style={{width:40,height:40,color:"#1e90ff"}}/>
              <LinkedIn style={{width:40,height:40,color:"#1e90ff"}} />
            </div>
          </Box>
                     
                      </Grid>

                      <Grid item xs={4}>
                        <Box>
                         
                      <div style={{color:"blue",fontWeight:700}}> <AttachFileSharpIcon style={{fontSize:18,marginRight:5}}/>SITE MAP</div>
                     
                      <div style={{color:'#2980b9',marginBottom:10}}>Quickly navigate our site through our sitemap below!</div>
                      <div style={{color:"blue"}}>HOME</div>
                      <div style={{color:"blue"}}>PRACTICE AREAS</div>
                      <div style={{color:"blue"}}>OUR ATTORNEYS</div>
                      <div style={{color:"blue"}}>CONTACT US</div>
                      <div style={{color:"blue"}}>CASE EVALUATION</div>
                      <div style={{color:"blue"}}>PRIVACY POLICY</div>
                      
                      </Box>
                      </Grid>

                      <Grid item xs={4}>
                        <Box style={{marginRight:20}}>
                      <div style={{color:"blue",fontWeight:700,marginBottom:15}}><HeadsetMicSharpIcon style={{fontSize:18,marginRight:5}}/>GOT A QUESTION?</div>
                      <div style={{color:"blue",marginBottom:15}}>
                        <TextField fullWidth label="Your Email Address" variant="outlined" ></TextField>
                      </div>

                      <div >
                        <TextField fullWidth label="Describe Your Case Briefly" variant="outlined"></TextField>
                      </div>
                      </Box>
                      </Grid>
                      

                      </Grid>
                      </Grid>
                      </div>
                      </div>
  )
}