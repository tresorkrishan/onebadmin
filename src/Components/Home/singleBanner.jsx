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
        // marginLeft:"100px",
        // marginRight:"100px",
        borderRadius:"10px",
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            marginLeft:"0",
            marginRight:"0",
        }
    },
    wrapper: {
        padding: '0 15px',
        margin:"1px",
        // backgroundColor:"white",
        // border:"1px solid #bbbbbb"

        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            paddingLeft:"0",
        }
    },

    wrapper1: {
        padding: '15px 15px',
        margin:"25px",
        backgroundColor:"white",
        borderRadius:"10px",
        cursor:"pointer",

        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            padding: '15px 15px',
            paddingLeft:"0",
        }
    },
   
    image: {
        width: '60%',
        backgroundColor:"white"
        // marginLeft:"50px",
        // borderRadius:"50px",
       
        // padding:"10px"
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
        color:"rgb(106,130,186)"
    
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

const SingleBanner = () => {
    const classes = useStyle();
    const url = 'https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png';
    return (
        <>
         <Box className={classes.component}>
         
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {/* {
                    ImageURL.map(image => ( */}
                        <Grid item lg={6} md={6} sm={12} xs={12} style={{paddingTop:"30px",textAlign:"center"}}>
                            <h1 style={{color:"white", fontWeight:"800", fontSize:"40px"}}>your <br></br> vaccination & <br></br>testing destination</h1>
                            <div>
                                
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} style={{display:"flex", padding:"20px",overflowX: 'overlay',}}>
                    
    <Box textAlign="center" className={classes.wrapper1}>
                                <img src="https://www.walgreens.com/images/adaptive/sp1/info_lady_illustration_homepage_desktop_2X.png" className={classes.image} alt="" />
                                <h1 className={classes.text}>See Health services</h1>  
                            </Box>
                        
                    <Box textAlign="center" className={classes.wrapper1}>
                                <img src="https://www.walgreens.com/images/adaptive/sp1/info_lady_illustration_homepage_desktop_2X.png" className={classes.image} alt="" />
                                <h1 className={classes.text}>Create a Health Profi</h1> 
                                
                            </Box>
                    
                        </Grid>
                    {/* ))
                } */}
            </Grid>
            
            
        </Box>
        </>
    )
}

export default SingleBanner;