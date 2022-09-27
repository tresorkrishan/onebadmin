import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
// import ProductDetail from './ProductDetail';
import ActionItem from './HeaderFilter';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../../constant/data';
import { useDispatch, useSelector } from 'react-redux';
import InnerSlide from './InnerSlide';
// import InnerSlide from './InnerSlide.jsx'
// import { getProductDetails } from '../../redux/actions/productActions';
import Slide from '../../Home/Slide'

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 125,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        paddingRight: 83,
        paddingLeft: 45,
        [theme.breakpoints.down('md')]: {
            paddingRight: 0,
            paddingLeft: 0,
            marginTop: 10,
        },
        '& > *': {
            marginTop: 10
        }
    },
    image1: {
        width: '100%',
        height: 280,
        borderRadius:"5px",
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180,
            width: '100%',
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));

const data = { 
    id: '',
    url: '', 
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    }, 
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '', 
    tagline: '' 
};

const DetailHeaderView = ({ history, match }) => {
    const classes = useStyles();
    const url = 'https://www.onebharatpharmacy.com/uploads/category/banner/main/Medicines_CAT_BAN_1625501940.jpg';
    const [ product, setProduct ] = useState(data);
    const [ loading, setLoading ] = useState(false);
    const { id } = useParams();

    const [ quantity, setQuantity ] = useState(1);

    const productDetails = useSelector(state => state.getProductDetails);
    // const { loading, product } = productDetails;

    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     if(product && match.params.id !== product.id)   
    //         dispatch(getProductDetails(match.params.id));
    // }, [dispatch, product, match, loading]);

   
    const getProductValues = async () => {
        setLoading(true);
        // const response = await getProductById(id);
        // console.log(response.data);
        // setProduct(response.data);
        setLoading(false);
    }
    useEffect(() => {
        getProductValues();
    }, [getProductValues]);

    return (
        <Box className={classes.component}>
            <Box></Box>
            { product && Object.keys(product).length &&
                <Grid container className={classes.container}> 
                    <Grid item lg={3} md={3} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    
                    <Grid item lg={9} md={9} sm={8} xs={12} className={classes.rightContainer}>
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
        {/* <InnerSlide/> */}
        <InnerSlide
                    // data={products} 
                    title='Inner Category'
                    timer={false} 
                    multi={true} 
                />
        <InnerSlide
                    // data={products} 
                    title='Inner Category'
                    timer={false} 
                    multi={true} 
                />
        
                    </Grid>
                    
                </Grid>
            }   
        </Box>
    )
}

export default DetailHeaderView;


