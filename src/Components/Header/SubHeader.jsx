import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CustomButtons from './CustomButtons';
import Search from './Search';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import { navData } from '../../constant/data';



const useStyle = makeStyles(theme => ({
    header: {
        background: '#FFFFFF',
        marginTop:"80px",
        height: 36,
        [theme.breakpoints.down('sm')]: {
            objectFit: 'cover',
        }
    },
   
    logo: {
        width: 65
    },  
    text: {
        fontSize: 14,
        fontWeight: 800,
        fontFamily: 'inherit',
        color:"#59AFE1",
        
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
            display: 'block'
        }
    },
    component: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '3px 10px 0 10px',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            objectFit:'cover',
        }
    },
    container: {
        padding: '5px 8px',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            objectFit:'cover',
            // padding: '0',
            // marginLeft:"15px,"
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
      minHeight: 55
    },
})(Toolbar);

const SubHeader = () => {
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
                </listItem>
            </List>
        </Box>
    );


    return (
        <>
        <AppBar position="fixed" className={classes.header}>
        <Box className={classes.component}>
            {
                navData.map(temp => (
                    <Link to={`medicines/hi}`}>
                    <Box className={classes.container } >
                        <Typography className={classes.text}>{temp.text}</Typography>
                    </Box>
                    </Link>
                ))
            }
        </Box>
           
        </AppBar>
       
        </>
    )
}

export default SubHeader;