import { makeStyles, Grid } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ImageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    // 'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

const useStyle = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        marginTop: 10,
        backgroundColor:"#FFFFFF",
       borderRadius:"10px",
        justifyContent: 'space-between'
    },
    root:{
        margin:"15px",
    borderRadius:"10px"
    },
    image: {
        width: '100%'
    },
    help: {
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }
}));

const Blog = () => {
    const classes = useStyle();
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className={classes.wrapper}>
                {/* {

                    ImageURL.map(image => ( */}
   
    
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Card className={classes.root}>
      
      
                        <CardActionArea>
        <CardMedia>
            <img src="https://www.onebharatpharmacy.com/uploads/blog/main/frustrated-young-woman-having-bad-hair_CAT_1638346175.jpg" alt="" height="250" width="100%"/>
        </CardMedia>

        <CardContent>
          
          <Typography variant="body2" color="textPrimary" component="p" style={{padding:"1px", marginTop:"-10px", fontSize:"16px", fontWeight:"800"}}>
           White Flakes On Your Winter Jacket? Follow This Hair Care Regime!
          </Typography>
        </CardContent>
      </CardActionArea>
    
       
     
    </Card>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Card className={classes.root}>
      
      
                        <CardActionArea>
        <CardMedia>
            <img src="https://www.onebharatpharmacy.com/uploads/blog/main/Asthma_CAT_1635311948.jpeg" alt="" height="250" width="100%"/>
        </CardMedia>

        <CardContent>
          
          <Typography variant="body2" color="textPrimary" component="h1" style={{padding:"1px", marginTop:"-10px", fontSize:"16px", fontWeight:"800"}}>
           White Flakes On Your Winter Jacket? Follow This Hair Care Regime!
          </Typography>
        </CardContent>
      </CardActionArea>
    
       
     
    </Card>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Card className={classes.root}>
      
      
                        <CardActionArea>
        <CardMedia>
            <img src="https://www.onebharatpharmacy.com/uploads/blog/main/little-girl-blue-hat-playing-winter-forest_CAT_1636962810.jpg" alt="" height="250" width="100%"/>
        </CardMedia>

        <CardContent>
          
          <Typography variant="body2" color="textPrimary" component="p" style={{padding:"1px", marginTop:"-10px", fontSize:"16px", fontWeight:"800"}}>
           White Flakes On Your Winter Jacket? Follow This Hair Care Regime!
          </Typography>
        </CardContent>
      </CardActionArea>
    
       
     
    </Card>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Card className={classes.root}>
      
      
                        <CardActionArea>
        <CardMedia>
            <img src="https://www.onebharatpharmacy.com/uploads/blog/main/Asthma_CAT_1635311948.jpeg" alt="" height="250" width="100%"/>
        </CardMedia>

        <CardContent>
          
          <Typography variant="body2" color="textPrimary" component="p"  style={{padding:"1px", marginTop:"-10px", fontSize:"16px", fontWeight:"800"}}>
           White Flakes On Your Winter Jacket? Follow This Hair Care Regime!
          </Typography>
        </CardContent>
      </CardActionArea>
    
       
     
    </Card>
                        </Grid>
                        
                    {/* ))
                } */}
            </Grid>
            {/* <img src={url} className={clsx(classes.wrapper, classes.help)} style={{width: '100%'}} alt="" /> */}
        </>
    )
}

export default Blog;


