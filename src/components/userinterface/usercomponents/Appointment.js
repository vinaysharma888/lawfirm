import React from "react";
import Footer from "./Footer";
import { useStyles } from "../screens/HomeCss";
import { Paper,Button,Grid} from "@mui/material";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

export default function Appointment(){
      var classes = useStyles()

      var categories=['EMPLOYEMENT LAW','INTELLECTUAL PROPERTY RIGHT','INTERNATIONAL LAW','FLSA LITIGATION','CORPORATE & BUSSINESS LAW',
      'CORPORATE & BUSSINESS LAW','CORPORATE LITIGATION','COMMERCIAL LAW','BUSSINESS AGREEMENTS']
      
      

      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };

      const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));
      
      function BootstrapDialogTitle(props) {
        const { children, onClose, ...other } = props;
      
        return (
          <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                
                </IconButton>
            ) : null}
          </DialogTitle>
        );
      }
      
      BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
      };
     
    return(

        <div>
             
        <div>
            <img src='assets/appointment.jpg' style={{width:'90%',marginLeft:80}}/>
        </div>


        <div>
            <div style={{marginTop:50,marginLeft:80,fontSize:30,fontWeight:700,marginBottom:30}}>
               Categories
            </div>
            <div  style={{marginLeft:80}} >
            <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.rowStyle} > 
                    <Grid item xs={3}>
            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer' }}  >
                    <div >
                    <img src="assets/r1.png" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>EMPLOYEMENT LAW</div>
                    <div>services:3</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen} >APPOINTMENT</Button></Paper>
                    </div>
                </Paper>

                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer',marginTop:50 }}  >
                    <div >
                    <img src="assets/r2.jpg" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>INTELLECTUAL PROPERTY RIGHT</div>
                    <div>services:2</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen} >APPOINTMENT</Button></Paper>
                    </div>
                </Paper>
                </Grid>

                <Grid item xs={3}>
            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer' }}  >
                    <div >
                    <img src="assets/r3.png" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>INTERNATIONAL LAW</div>
                    <div>services:2</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen} >APPOINTMENT</Button></Paper>
                    </div>
                </Paper>

                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer',marginTop:50 }}  >
                    <div >
                    <img src="assets/r4.jpg" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>FLSA LITIGATION</div>
                    <div>services:2</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                    </div>
                </Paper>
                </Grid>

                <Grid item xs={3}>
            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer' }}  >
                    <div >
                    <img src="assets/r5.jpg" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>CORPORATE & BUSSINESS LAW</div>
                    <div>services:4</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                    </div>
                </Paper>

                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer',marginTop:50 }}  >
                    <div >
                    <img src="assets/r6.jpg" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>CORPORATE LITIGATION</div>
                    <div>services:1</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                    </div>
                </Paper>
                </Grid>

                <Grid item xs={3}>
            <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer' }}  >
                    <div >
                    <img src="assets/r7.png" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>COMMERCIAL LAW</div>
                    <div>services:2</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                    </div>
                </Paper>

                <Paper elevation={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 200, height: 'auto', margin: 10, padding: 5, flexWrap: 'wrap',cursor:'pointer',marginTop:50 }}  >
                    <div >
                    <img src="assets/r8.jpg" style={{ width: 80, height: 80 }} />
                    </div>
                    <div>BUSSINESS AGREEMENTS</div>
                    <div>services:3</div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 1, width: '90%' ,marginTop:5}}>
                       
                        <Paper elevation={4} style={{ width: '100%', height: 37, position: 'relative',  }}><Button style={{ borderColor: 'red', color: 'red', width:'100%', height: 37 }} variant="outlined" onClick={handleClickOpen}>APPOINTMENT</Button></Paper>
                    </div>
                </Paper>
                </Grid>



                </Grid>
                </Grid>
            </div>
        </div>


        <div style={{marginTop:100}}>
        <Footer />
        </div>

        
        <div>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
       
          <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            BOOK APPOINTMENT
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <div style={{marginTop:5,marginBottom:5,fontWeight:600,fontSize:18}}>
          
          Service Info:

        
          </div>
          <div style={{marginTop:5,marginBottom:5,fontWeight:600,fontSize:18}}>
          Duration: 45 min
         
          </div>
            
            <div style={{marginTop:5,marginBottom:5,fontWeight:600,fontSize:18}}>
             
             Capacity:1-5
             </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Continue
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
        </div>
    )
}