import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';

 
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        marginBottom: 16,
        background: 'white',
        padding:10,
        borderRadius:"10px"
    }, 
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    image: {
        width: 'auto',
        height: 150
    },
    text: {
        fontSize: 14,
        marginLeft: 35
    },
    deal: {
        display: 'flex',
        // padding: '15px 20px'
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#59AFE1',
        borderRadius: 2,
        fontSize: 13
    },
    wrapper: {
        padding: '15px 15px'
    },
    root: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      },
      orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
      },
    
}));

const MultiHealthConcenCategory = ({ data, timer, title }) => {
    const classes = useStyle();
    let history = useHistory();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };
    
    return (
        <Box className={classes.component} >
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer && <Box className={classes.timer}>
                                <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Box>
                }
                <Button variant="contained" color="primary" className={classes.button}>See All</Button>
            </Box>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={false}
                autoPlay={false}sas
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                
                
                
                {/* {
                    data.map(temp => ( */}
                    <Box className={classes.container} onClick={()=>{history.push(`category/healthconcern`)}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e3katuw3w1qdfiv0cbjn.png" className={classes.image} alt="" />
        <Typography className={classes.text}>diabetes Care</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/bal76mxxccyhrti2erkn.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Cardiac Care</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/l2zrxcsfyguccggnkp4m.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Stomach Care</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/klrkvhzloqbyt6z8cvgv.png" className={classes.image} alt="" />
        <Typography className={classes.text}> Liver Care</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zd1jcixlqcmxlxlmgitc.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Bone Joint Care</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c0o3w8wdjnzesk2pshcr.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Kidney Care</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/vsyneobahnsdqzllvzuv.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Pain relief</Typography>
    </Box>
                    {/* ))
                } */}
            </Carousel>
            
        </Box>
    )
}

const BrandCategory = (props) => {
    return (
        <>
            {
                props.multi === true ? <MultiHealthConcenCategory {...props} /> : ''      
            }
        </>
    )
}

export default BrandCategory;