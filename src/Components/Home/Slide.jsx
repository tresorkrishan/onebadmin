import { Box, Typography, makeStyles, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


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
        background: '#FFFFFF',
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
        height: 160
    },
    text: {
        fontSize: 15,
        marginTop: 5,
        fontWeight:400,
        color:"grey",
        
    },
    deal: {
        display: 'flex',
        padding: '5px 20px'
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
        padding: '15px 15px',
        marginLeft:"10px",
        marginRight:"10px",
    },
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
    
}));

const MultiSlide = ({ data, timer, title }) => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds}  Left</span>;
    };
    
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {
                    timer && <Box className={classes.timer}>
                                <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        </Box>
                }
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
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
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/r4q79nrsaa1tfaxfvbn7.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link> 
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/se3cxo2mvzgqmtogtmof.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/qdkxnbhl24dgn02m7fc4.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/uca5jm0uqfqpjoyydzh0.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/kig1l1egf5xcijweblix.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/tamf9xnrq7ncapgc04t6.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/zd02vxwzldjojodryrbk.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                        <Link to={`product/hi}`} style={{textDecoration: 'none'}}>
                        <Box textAlign="center" className={classes.wrapper}>
                                <img src="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/zd02vxwzldjojodryrbk.jpg" className={classes.image} alt="" />
                                <Typography className={classes.text} style={{ fontWeight: 400, color: '#212121', lineHeight:"1.3" }}>Sebamed Clear Face <br></br> Care Gel 50 ml </Typography>
                                <Typography className={classes.text} style={{ color: '#212121' }}>MRP ₹ 476.00<span style={{fontWeight:"600"}}>(5% OFF)</span></Typography>
                                <Typography className={classes.text} style={{ color: '#212121',fontWeight: 400, }}>₹ 452.20</Typography>
                            </Box>
                        </Link>
                    {/* ))
                } */}
            </Carousel>
        </Box>
    )
}

const Slide = (props) => {
    return (
        <>
            {
                props.multi === true ? <MultiSlide {...props} /> : ''      
            }
        </>
    )
}

export default Slide;