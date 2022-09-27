import { makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { Box, Typography, Button, Divider } from '@material-ui/core';
// import Testimonial from './Testimonial';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import Avatar from '@material-ui/core/Avatar';


const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles(theme => ({
    component:{
        backgroundColor:"#323264",
        borderRadius:"10px"
    },
    wrapper: {
        padding: '25px 15px',
        margin:"5px",
        // backgroundColor:"white",
        // border:"1px solid #bbbbbb"

        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            paddingLeft:"0",
        }
    },

    wrapper1: {
        // padding: '25px 15px',
        margin:"25px",
        backgroundColor:"white",
        borderRadius:"10px",
        cursor:"pointer",
        // border:"1px solid #bbbbbb"

        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            paddingLeft:"0",
        }
    },
   
    image: {
        width: '50%',
        backgroundColor:"white",
        // marginLeft:"50px",
        // borderRadius:"50px",
       
        padding:"10px",
    },
     deal: {
        display: 'flex',
        // padding: '15px 20px'
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center', 
        margin:"32px",
        backgroundColor:"white",
        borderRadius:"10px",
        textAlign:"center"
        // "&:hover": {
        //     backgroundColor: '#51C0DB'
        //   }   

    },
    text: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: '32px',
        marginRight: 25,
        marginLeft:"40px",
        color:"#323264"
    
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#59AFE1',
        borderRadius: 2,
        fontSize: 13
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const LabTests = () => {
    const classes = useStyle();
    const url = 'https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png';
    return (
        <>
         <Box className={classes.component}>
         
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {/* {
                    ImageURL.map(image => ( */}
                        <Grid item lg={4} md={4} sm={12} xs={12} style={{paddingTop:"40px"}}>
                            <h1 style={{fontSize:"40px", fontWeight:"800", color:"white",  marginLeft:"40px"}}>your <br></br> vaccination & <br></br>testing destination</h1>
                        </Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12} style={{display:"flex", padding:"20px",overflowX: 'overlay',}}>
                    
    <Box textAlign="center" className={classes.wrapper1}>
                                <img src="https://www.walgreens.com/images/adaptive/sp1/1787326_Schedule_260x260.png" className={classes.image} alt="" />
                                <h1 className={classes.text}>LabTest 1</h1>  
                            </Box>
                        
                    <Box textAlign="center" className={classes.wrapper1}>
                                <img src="https://www.walgreens.com/images/adaptive/sp1/1787326_Schedule_260x260.png" className={classes.image} alt="" />
                                <h1 className={classes.text}>LabTest 2</h1> 
                                
                            </Box>
                    <Box textAlign="center" className={classes.wrapper1}>
                                <img src="https://www.walgreens.com/images/adaptive/sp1/1787326_Schedule_260x260.png" className={classes.image} alt="" />
                                
                                <h1 className={classes.text}>LabTest3</h1> 
                            </Box>
                        </Grid>
                    {/* ))
                } */}
            </Grid>
            
            
        </Box>
        </>
    )
}

export default LabTests;