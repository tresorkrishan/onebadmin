import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import CustomButtons1 from './CustomButtons1';
import Search from './Search';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import SubHeader from './SubHeader'

const useStyle = makeStyles(theme => ({
    header: {
        background: '#FFFFFF',
        height: 80,
        width:"100%",
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
            
        }
    },
    component: {
        marginLeft: '2%',
        lineHeight: 0,
        color: '#59AFE1',
        textDecoration: 'none'
    },
    logo: {
        width: 160
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            color:"green"
            
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
}));

const ToolBar = withStyles({
    root: {
      minHeight: 83
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                    {/* <CustomButtons1 /> */}
                </listItem>
            </List>
        </Box>
    );


    return (
        <>
        <>
        <AppBar position="fixed" className={classes.header}>
            <ToolBar>
                <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                    <img src="https://www.onebharatpharmacy.com/assets/logo.png" className={classes.logo} alt="" />
                   
                </Link>
                <Search />
                <div style={{display:"flex", marginLeft:"100px", paddingTop:"10px"}}>
                <span className={classes.customButtons}><CustomButtons /></span>
                <span className={classes.customButtons}><CustomButtons1 /></span>
                </div>
                <div style={{display:"column", marginLeft:"100px", paddingTop:"10px"}}>
                {/* <span className={classes.customButtons}><CustomButtons /></span> */}
                {/* <span className={classes.customButtons}><CustomButtons /></span> */}
                </div>
               
            
            </ToolBar>
            
        </AppBar>
        </>
       <>
       <SubHeader/>
       </>
        </>
    )
}

export default Header;