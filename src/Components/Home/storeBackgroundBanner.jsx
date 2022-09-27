import { makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://www.pillpack.com/images/auto/hp-pharmacist-mobile@2x-79c69cce3b.webp',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            // width:
        }
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
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

const StoreBackgroundBanner = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            {/* <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {
                    ImageURL.map(image => (
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <img src={image} className={classes.image} alt="" />
                        </Grid>
                    ))
                }
            </Grid> */}
            <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" className={clsx(classes.wrapper, classes.help1)} style={{width: '100%'}} alt="" />
        </>
    )
}

export default StoreBackgroundBanner;