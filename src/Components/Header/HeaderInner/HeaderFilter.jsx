import { useState, useContext, useReducer, useEffect } from 'react';
import { Button, Box, makeStyles,TextField } from '@material-ui/core';
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux';
// import { loadRazorpay } from '../../razorpay/loadPayment';


const useStyle = makeStyles(theme => ({
    leftContainer: {
        minWidth: '40%',
        // border: '1px solid #f0f0f0',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        marginTop:"25px",
        marginLeft:"70px",
        paddingLeft:"30px",
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '85%',
        display:"grid",
        [theme.breakpoints.down('md')]: {
            padding: '0px 0px',
            marginLeft:"30px",
        }
        
    },
    productImage1: {
        marginTop:"25px",
        marginLeft:"70px",
        paddingLeft:"10px",
        padding: '15px 2px',
        border: '1px solid #f0f0f0',
        width: '85%',
        display:"grid",
        [theme.breakpoints.down('md')]: {
            padding: '0px 0px',
            marginLeft:"30px",
        }
        
    },
    listItem:{
        marginTop:"-20px",
        fontSize:"10px"
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}));

const HeaderFilter = ({ product }) => {
    const classes = useStyle();
    const history = useHistory();
    // const { account } = useContext(LoginContext);
    const { id, price, detailUrl, title } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
    //    loadRazorpay(600);
    }

    const addItemToCart = () => {
        // dispatch(addToCart(id, quantity));
        history.push('/cart');
    }

    return (
        <div style={{marginTop:"60px"}}>
        <>
        <Box className={classes.productImage}>
            
            <FormLabel component="legend" style={{marginBottom:"20px"}}>Sub-Categories</FormLabel>
            <FormControlLabel
          value="Drugs"
          control={<Checkbox color="primary" />}
          label="Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="OTC"
          control={<Checkbox color="primary" />}
          label="OTC"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="Surgical Drugs"
          control={<Checkbox color="primary" />}
          label="Surgical Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
           
            
        </Box>
        <Box className={classes.productImage}>
            
            <FormLabel component="legend" style={{marginBottom:"20px"}}>Sub-Categories</FormLabel>
            <FormControlLabel
          value="Drugs"
          control={<Checkbox color="primary" />}
          label="Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="OTC"
          control={<Checkbox color="primary" />}
          label="OTC"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="Surgical Drugs"
          control={<Checkbox color="primary" />}
          label="Surgical Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
           
            
        </Box>
        <Box className={classes.productImage}>
            
            <FormLabel component="legend" style={{marginBottom:"20px"}}>Sub-Categories</FormLabel>
            <FormControlLabel
          value="Drugs"
          control={<Checkbox color="primary" />}
          label="Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="OTC"
          control={<Checkbox color="primary" />}
          label="OTC"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="Surgical Drugs"
          control={<Checkbox color="primary" />}
          label="Surgical Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
           
            
        </Box>
        <Box className={classes.productImage}>
            
            <FormLabel component="legend" style={{marginBottom:"20px"}}>Sub-Categories</FormLabel>
            <FormControlLabel
          value="Drugs"
          control={<Checkbox color="primary" />}
          label="Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="OTC"
          control={<Checkbox color="primary" />}
          label="OTC"
          labelPlacement="end"
          className={classes.listItem}
        />
            <FormControlLabel
          value="Surgical Drugs"
          control={<Checkbox color="primary" />}
          label="Surgical Drugs"
          labelPlacement="end"
          className={classes.listItem}
        />
           
            
        </Box>
        <Box className={classes.productImage1}>
            
        <div style={{display:"flex"}}>
        <TextField
          id="outlined-name"
          label="Name"
        //   value={name}
        //   onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          variant="outlined"
        />
      </div>
            
        </Box>
        </>
        </div>
    )
}

export default HeaderFilter;