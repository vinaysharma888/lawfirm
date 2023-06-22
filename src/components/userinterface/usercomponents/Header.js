import React, { useState, } from 'react';

import { useStyles } from '../screens/HomeCss';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});



export default function Header(props){

    var classes = useStyles()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
      

return(<div >

<Box sx={{ flexGrow: 1 }}>
     

      <AppBar position='relative' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "left", height:  90 , background:'#2980b9' , color: '#000', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 40, justifyContent: 'start', width: '100%' }}>
            <img src='assets/logo.jpg' style={{ width:100, height: 70, cursor: 'pointer',borderRadius:'50%' }} />
            <Typography style={{marginLeft:20,marginTop:15,fontSize:30}}>
              OSCODE LAW FIRM
            </Typography>

            <div style={{ display: 'flex', justifyContent:'end', width: 550, marginLeft: 400, marginRight: 10 }}>
              <Typography style={{marginTop:20,fontWeight:600,fontSize:20,fontFamily:'sans-serif'}}>True Value,True Values</Typography>
            </div>
           
           <MenuIcon style={{marginTop:20,marginLeft:20,color:'#c0392b',cursor:'pointer'}} onClick={handleClickOpen}/>
          </div>
      </AppBar>
    </Box>

    <div >
      
      <Dialog
    
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
       
      >
       <Grid container spacing={2} style={{backgroundColor:'#dff9fb',width:'100vw',height:'100vh'}}>
       
                <Grid item xs={12} className={classes.rowStyle}>
                <CloseIcon style={{marginTop:20,marginLeft:20,cursor:'pointer'}} onClick={handleClose} />
                  <Grid item xs={4} >
                   <img src="./assets/logo.jpg" style={{width:'40%',marginTop:120,marginLeft:80,borderRadius:"50%"}} />
                  </Grid>
                  <Grid item xs={8}>
                    <div style={{marginTop:160,fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                    Home
                    </div>
                    <div style={{fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                      About Us
                    </div>
                    <div style={{fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                      Sectors & Services
                    </div>
                    <div style={{fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                      Knowledge Center
                    </div>
                    <div style={{fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                      Awards
                    </div>
                    <div style={{fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                     Events
                    </div>
                    <div style={{fontSize:25,marginBottom:30,fontWeight:700,fontFamily:'cursive'}}>
                     Contact Us
                    </div>
                    <div>

                    </div>
                  </Grid>
                  </Grid>
                  </Grid> 

        
       
      </Dialog>
    </div>

</div>
)
}