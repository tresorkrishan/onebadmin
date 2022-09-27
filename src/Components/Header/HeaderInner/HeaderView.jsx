import { makeStyles, Grid } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../../constant/data';

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 220,
        justifyContent: 'space-between',
        
        
    },
    image: {
        width: '100%',
        borderRadius:"10px"
    },
    gridItem:{
        // margin:"10px",
        // padding:"10px"
        },
    image1: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const MidSection = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
            
            <Grid item lg={4} md={4} sm={12} xs={12} className={classes.gridItem}>
                            <img src="https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50" className={classes.image} alt="" />
                        </Grid>
                        <Grid item lg={8} md={8} sm={12} xs={12} className={classes.gridItem}>
                        <Carousel 
            autoPlay={true} 
            animation="slide" 
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            className={classes.container}
            StylesProvider
            navButtonsProps={{ 
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,
                }
            }}
        >
            {
                bannerData.map(image => (
                    <img src={url} className={classes.image1} alt="" />
                ))
            }
        </Carousel>
                        </Grid>
                       
            </Grid>
            {/* <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} alt="" /> */}
        </>
    )
}

export default MidSection;

