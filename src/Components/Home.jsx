import { Box, makeStyles } from '@material-ui/core';
import NavBar from './Home/NarBar';
import Banner from './Home/Banner';
import MidSlide from './Home/MidSlide';
import MidSection from './Home/MidSection';
import Slide from './Home/Slide';
import React,  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts as listProducts } from '../redux/actions/productActions';
import { getCategories as listCategories } from '../redux/actions/categoryActions';
import LabTests from './Home/LabTests';
import HealthConcenCategory from './Home/HealthConcernCategory';
import BoxCategory from './Home/BoxCategory';
// import Blog1 from './Home/Blog1';
import BrandCategory from './Home/BrandCategory';
import StoreBackgroundBanner from './Home/storeBackgroundBanner';
import SingleBanner from './Home/singleBanner';
import Blog from './Home/Blog';
// import Blog1 from './Home/Blog1';
import Testimonial from './Home/Testimonial';
import Footer from './Home/Footer/Footer';
import Banner2 from './Home/Banner2';
// import Blog1 from './Home/blog1';





const useStyle = makeStyles(theme => ({
    component: {
        padding: 10,
        background: '#F2F2F2',
        [theme.breakpoints.down('sm')]: {
            objectFit:"cover",
            overflowX:"hidden"
         }
    },
    
}));

const Home = () => {
    const classes = useStyle();

    const getProducts = useSelector(state => state.getProducts);
    const getCategories = useSelector(state => state.getCategories);
    const { products} = getProducts;
    const { categories} = getCategories;


    console.log("cbiwdcinowencowvbnevbn", getCategories)
    // console.log("cbiwdcinowencowvbnevbn", {categories})
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
        dispatch(listCategories())

    }, [dispatch])

    return (
        <> 
            {/* <NavBar /> */}
            <Box className={classes.component}>
                <Banner /> 
                <HealthConcenCategory
                // data={categories} 
                title='Category Carousel'
                timer={false} 
                multi={true} 
                />
                
                 <MidSection />
                 
                 <LabTests/>
                 <StoreBackgroundBanner/>
                 <MidSlide products={products} />
                
                  <Slide
                    data={products} 
                    title='Brand Category'
                    timer={false} 
                    multi={true} 
                />
                 <BoxCategory
                data={products} 
                title='Brand Carousel Slider'
                timer={false} 
                multi={true} 
                />
               
               
               
               
                {/* <Blog1
                data={products} 
                title='Blog1 Blog1'
                timer={false} 
                multi={true} 
                /> */}
                
                <SingleBanner />
                <BrandCategory
                data={products} 
                title=' Shop By Health Concern'
                timer={false} 
                multi={true} 
                />
                <Banner2/>  
                <Testimonial/>
                <Slide
                    data={products} 
                    title='Brand Category'
                    timer={false} 
                    multi={true} 
                />
                 <Slide
                    data={products} 
                    title='Brand Category'
                    timer={false} 
                    multi={true} 
                />
                <Blog/>
                <Footer/>
               
                {/* <Slide
                    data={products} 
                    title='Suggested Items'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Top Selection'
                    timer={false} 
                    multi={true} 
                />
                <Slide
                    data={products} 
                    title='Recommended Items'
                    timer={false} 
                    multi={true} 
                /> */}
            </Box>
        </>
    )
}

export default Home;