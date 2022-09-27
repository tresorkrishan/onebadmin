import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constant/data';
import { makeStyles } from '@material-ui/core'
import axios from 'axios'
import React,{useState,useEffect } from 'react';
import config from '../../config';


let baseURL ="http://localhost:3010"


const useStyle = makeStyles(theme => ({
    container: {
        marginTop:"60px",
        borderRadius:"10px"
    },
    image: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            height: 180
        }
    }
}))

const Banner = () => {
    const[bannerData,setBannerData] = useState([])
    const classes = useStyle();


  function getCategoriesData() {
    axios
      .get(`${config.BASE_URL}api/banner/banners`)
      .then(response => response.data)
      .then(data => {
        console.log("bannerdata", data);
        setBannerData(data)
      });
  }

  useEffect(() => {
    getCategoriesData();
  }, []);
    return (
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
                    <img src={config.BASE_URL+image.url} className={classes.image} alt="" />
                ))
            }
        </Carousel>
    )
}

export default Banner;