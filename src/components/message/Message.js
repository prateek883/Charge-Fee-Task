import { Button, Grid, Hidden, IconButton, makeStyles, TextField } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import hello from '../../images/hello.jpg'
import Loader from '../Loader/Loader'
import './Message.css'
import  axios from '../../axios.js'
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom'


function Message() {
    
    const [loader,setLoader] = useState(false);
    const [success,setSuccess] = useState(null);
    const [error,setError] = useState(null);
    const textInput = useRef(null)
    
    const submitHandler = (event) => {
        event.preventDefault();
        const input = textInput.current.value;
        
        if(!input) {
            setError("Require Input .Cant send empty message");
            setTimeout(() => {setError(null)},1500);
            return
        }
        setLoader(true);
        (async () => {
            
            try {
               const msg= await axios.post("/whatsApp", {
                    data: input,
                  });
                  console.log(msg.data)
                  textInput.current.value=""
                  setLoader(false);
                  setSuccess("Message sent Successfully");
                  setTimeout(() => {setSuccess(null)},1500);
            }
            catch(error) {
                setLoader(false);
                console.log(error)
                setError(error.data);
                setTimeout(() => {setError(null)},1500);
            }
           
           
          })();
        
    }
    
    return (
        <div className="message">
            <div className="message__back">
                <IconButton  component={Link} 
                    to={'/'} >
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <Grid container alignItems="center" style={{height: '100vh !important'}} className="message__container">
                <Grid item xs={12} md={6}  >   
                <div  >
                <div className="message__loader">
                    {/* <h2>success</h2> */}
                     {loader ?  <Loader /> : null }   
                        <h2 className="message__success"  >{success}</h2>
                        <h2 className="message__error"  >{error}</h2>
                    </div>
                    <form onSubmit={submitHandler} >
                    <TextField
                    inputRef = {textInput}
                        multiline={true}
                        label="Message"
                        rowsMax={6}
                        fullWidth={true}
                        variant="filled"
                        />
                    <Button  type="submit" className="message__button" >
                        send Message
                    </Button>    
                    </form>
                </div>
                    
                </Grid>
                <Hidden smDown>
                <Grid item xs={12} md={6}>
                    <img src={hello} />
                </Grid>
                </Hidden>
             
            </Grid>
        </div>
    )
}

export default Message
