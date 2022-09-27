import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import React,{useEffect,useState} from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { getCategories as listCategories } from '../../redux/actions/categoryActions';
import { useSelector, useDispatch } from 'react-redux'; // hooks
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Avatar from '@mui/material/Avatar';

 
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import config from '../../config';



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
        background: 'white',
        padding:10,
        borderRadius:"10px"
    }, 
    container: {

        [theme.breakpoints.down('sm')]: {
        //    marginLeft:"10px",
        }
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
        height: 150,
        marginTop:"1px",
        [theme.breakpoints.down('sm')]: {
            marginLeft:"10px",
         }
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
    // dealText: {
    //     fontSize: 18,
    //     fontWeight:600,
    //     lineHeight: '32px',
    //     marginRight: 25,
    //     paddingLeft:"20px"
    // },
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

const MultiHealthConcenCategory = ({  timer, title }) => {
    const classes = useStyle();
    let history = useHistory();
    const dispatch = useDispatch();
    const [categoryData,setCategoryData] = useState()
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const getCategories = useSelector(state => state.getCategories.products);
    console.log("wnnidnsnciwecniewnciewncivnwe",getCategories)
    // setCategoryData(getCategories.products)
    

    useEffect(() => {
        dispatch(listCategories())
    }, [dispatch])

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
            {/* <Divider /> */}
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
{/*                 
                 <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
                    <img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cabpuknnlyyzgqfnb4x5.png" className={classes.image} alt="" />
                    <Typography className={classes.text}>Category 1</Typography>
                    </Box> */}
                    {
    getCategories.map(temp => (
        // <Link to={`product/hi`} style={{textDecoration: 'none'}}>
                     <Box className={classes.container} onClick={()=>{history.push(`category/healthconcern`)}}>
    
    <img src={config.BASE_URL+temp.url1} className={classes.image} alt="" />
<Typography className={classes.text}>{temp.categoryName}</Typography>
</Box>
        // </Link>

    )
    )}
             
            </Carousel>
            
        </Box>
    )
}

const HealthConcenCategory = (props) => {
    return (
        <>
            {
                props.multi === true ? <MultiHealthConcenCategory {...props} /> : ''      
            }
        </>
    )
}

export default HealthConcenCategory;




// {
//     getCategories.map(temp => (
//         <Link to={`product/hi`} style={{textDecoration: 'none'}}>
//                      <Box className={classes.container} onClick={()=>{history.push(`category/healthconcern`)}}>
    
//     <img src={temp.ur1} className={classes.image} alt="" />
// <Typography className={classes.text}>{temp.categoryName}</Typography>
// </Box>
//         </Link>

//     )
//     )}
         
{/* <Box className={classes.container} onClick={()=>{console.log("hello")}}>
                    
<img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/cabpuknnlyyzgqfnb4x5.png" className={classes.image} alt="" />
<Typography className={classes.text}>Category 1</Typography>
</Box>
<Box className={classes.container} onClick={()=>{console.log("hello")}}>

<img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/x2z8u1osqutmxvx56hlw.png" className={classes.image} alt="" />
<Typography className={classes.text}>Category 1</Typography>
</Box>
<Box className={classes.container} onClick={()=>{console.log("hello")}}>

<img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fbigjgxv2wquqqb3galn.png" className={classes.image} alt="" />
<Typography className={classes.text}>Category 1</Typography>
</Box>
<Box className={classes.container} onClick={()=>{console.log("hello")}}>

<img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/uq1gwxslqqrxxwv6zi6j.jpg" className={classes.image} alt="" />
<Typography className={classes.text}>Category 1</Typography>
</Box>
<Box className={classes.container} onClick={()=>{console.log("hello")}}>

<img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/p1blaka183nc1zlil8tq.png" className={classes.image} alt="" />
<Typography className={classes.text}>Category 1</Typography>
</Box>
<Box className={classes.container} onClick={()=>{console.log("hello")}}>

<img src="https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/j7ruar88gacbzksuadjn.png" className={classes.image} alt="" />
<Typography className={classes.text}>Category 1</Typography>
</Box> */}