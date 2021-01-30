import { Button, Grid, Hidden, Icon, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "./Navbar.css"
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import LockIcon from '@material-ui/icons/Lock';
import Products from './Products';
import Solution from './Solutions';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Minimize from './Minimize';
import CloseIcon from '@material-ui/icons/Close';

function Navbar({user}) {
    
    // this is for when user hover on button (login) it will change arrow icon
    const [icon ,setIcon] = useState(<ArrowForwardIosOutlinedIcon />)
    // this is for when user hover on button ( send a message) it will change arrow icon
    const [iconMessage , setIconMessage] = useState(<ArrowForwardIosOutlinedIcon />)
    
    // this will show product dropdown when hover on products
    const [showProducts , setShowProducts] = useState(false);
    // this will show solution dropdown when hover on solution
    const [showSolution , setShowSolution] = useState(false);
    // this will show product resources when hover on resources
    const [showResource , setShowResource] = useState(false);
    
    // this will show menuIcon only when screen will be in mobile mode this will decide weather to show cross icon or menu icon
    const [menu , setMenu] = useState(false);
    
    
    const showMore = (setUseState) => {
        
        // when hover on navbar spans it will first hide all dropdowns and the show the respect dropdow which is requested
        
        setShowProducts(false);
        setShowResource(false);
        setShowSolution(false);
        setUseState(true);
    }
    
    const showLess = () => {
        
        // this will hide all dropdowns
        setShowProducts(false);
        setShowResource(false);
        setShowSolution(false);
    }
    // console.log(user)
    
    return (
        <div className="navbar" onMouseLeave={() =>showLess()}>
            <Grid container >
                <Grid item>
                   <h2>Chargebee</h2>
                </Grid>
                <Hidden lgUp>
                     {/* // this grid will be hidden after screen silze is more than lg */}
                    <Grid item className="navbar__button--grid" >
                      <IconButton onClick={() => setMenu(!menu)} >
                       { !menu ?  <MenuIcon   /> : <CloseIcon  /> } 
                       </IconButton>
                    </Grid>
                    
                </Hidden>
                <Hidden mdDown >
                <Grid item className="navbar__grid--items">
                    <h3  
                         onMouseEnter={() =>  showMore(setShowProducts) } > Products</h3>
                    <h3  onMouseEnter={() =>showLess()}  >Pricing</h3>
                    <h3  onMouseEnter={() =>  showMore(setShowSolution) } >Solutions</h3>
                    <h3  onMouseEnter={() =>showLess()}>Customers</h3>
                    <h3  onMouseEnter={() =>  showMore(setShowResource) }>Resources</h3>
                </Grid>
                <Grid item className="navbar__button--grid" >
                    {!user ?  
                      <Button
                    component={Link} 
                    to={'/login'}
                      onMouseLeave={() => setIcon(<ArrowForwardIosOutlinedIcon />)}
                      onMouseEnter={() => setIcon( <ArrowForwardOutlinedIcon /> )}
                      className="navbar__button--login"
                      endIcon={icon}
                  >
                      <LockIcon className="navbar__button--icon" />
                      Login
                  </Button>
                    :  <p className="navbar__username" >Hi , {user}</p> 
                
                }
              
                {
                user?
                    <Button
                    component={Link} 
                    to={'/message'}
                        variant="contained"
                        color="primary"
                        className="navbar__button--message"
                        onMouseLeave={() => setIconMessage(<ArrowForwardIosOutlinedIcon />)}
                        onMouseEnter={() => setIconMessage( <ArrowForwardOutlinedIcon /> )}
                        endIcon={iconMessage}
                    >
                        Send A Message
                    </Button> : null
                }
                </Grid>
                </Hidden>
            </Grid>
        {showProducts ? <Products /> : null } 
        {showSolution ? <Solution /> : null } 
        {showResource ? <Products /> : null }
        {menu ? <Minimize user={user} /> : null} 
        </div>
    )
}

export default Navbar
