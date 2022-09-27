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
// import Carousel from 'react-multi-carousel';
const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 12,
        marginBottom: 15,
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
        fontSize: 17,
        marginLeft: 35,
        fontWeight:"500",
        paddingTop:"3px"
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
                autoPlay={false}
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
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/f83c30ab-6193-4c9c-a5cf-9ec1623efe5c.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 1</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/p6za9vyw6bk7c1hi0xwk.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 2</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ztfckvm1mbyobx7evgu0.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 3</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/8c561421-2fb6-408e-b82f-d8847a72753c.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 4</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/55ecc026-a00a-4c85-9950-57d91ed8dc64.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 5</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/a739e889-5bfa-42f5-a054-685262c00b8e.png" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 6</Typography>
    </Box>
    <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/52abeeb0-84c6-48ae-85f0-2c409cb11a84.jpg" className={classes.image} alt="" />
        <Typography className={classes.text}>Brand 7</Typography>
    </Box>
                    {/* ))
                } */}
            </Carousel>
            
        </Box>
    )
}

const BoxCategory = (props) => {
    return (
        <>
            {
                props.multi === true ? <MultiHealthConcenCategory {...props} /> : ''      
            }
        </>
    )
}

export default BoxCategory;