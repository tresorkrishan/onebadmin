import { makeStyles, Grid,Link } from '@material-ui/core';
import clsx from 'clsx';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://www.pillpack.com/images/auto/hp-pharmacist-mobile@2x-79c69cce3b.webp',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: -10,
        justifyContent: 'space-between',
        borderRadius:"7px",
        marginBottom:"5px",
        [theme.breakpoints.down('md')]: {
            // width:
        }
    },
    image: {
        width: '90%',
        marginLeft:"97px",
        borderRadius:"10px",
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            width: '100%',
            marginLeft:"0px",
            borderRadius:"5px",
        }
    },
    help: {
        display:"grid",
         marginLeft:"200px",
         marginTop:"40px",
         marginRight:"0px",
        paddingLeft:"100px", 
        paddingRight:"10px",
         lineHeight:"1.9 ", 
        textAlign:"left",
         alignItems:"right",
    marginBottom:"10px",
        color:"rgb(2,50,77)",
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            margin:0,
            padding:0,
            marginLeft:"10px",
            marginBottom:"10px",
        }
    },
   
    help1: {
        borderRadius:"10px",
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120,
            // width:"60%",

        }
    }
}));

const Banner2 = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {/* {
                    ImageURL.map(image => ( */}
                    <Grid item lg={5} md={5} sm={12} xs={12} style={{paddingTop:"30px",textAlign:"center"}}>
                           
                            <div className={classes.help}>

<h4 style={{marginBottom:"10px"}}>FULL SERVICE</h4>
<h1>A new kind of care</h1>
<div>
    <h5 style={{fontWeight:"600"}}>Automatic refills</h5>
<p>
We monitor and manage your refills with your doctors so you always have the medications you need.</p></div>

<div>
    <h5 style={{fontWeight:"600"}}>Behind-the-scenes support</h5>
<p>We work directly with your doctors and insurance to save you time and hassle.</p></div>

<div>
    <h5 style={{fontWeight:"600"}}>Everything in one place</h5>
<p>We organize all your medication, billing, and prescription details for easy access.</p></div>
<Link href="#">See How it works <span><ArrowForwardIosIcon/></span></Link>
                            </div>
                           

                        </Grid>
                        <Grid item lg={7} md={7} sm={12} xs={12}>
                            <img src="https://www.pillpack.com/images/auto/hp-pharmacist-mobile@2x-79c69cce3b.webp" className={classes.image} alt="" />
                        </Grid>
                        
                    {/* ))
                } */}
            </Grid>
            {/* <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" className={clsx(classes.wrapper, classes.help1)} style={{width: '100%'}} alt="" /> */}
        </>
    )
}

export default Banner2;