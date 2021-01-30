import { Button, Grid, IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import './Slider.css'
import img1 from '../../images/sliderImg-1.png'
import img2 from '../../images/sliderImg-2.png'
import img3 from '../../images/sliderImg-3.svg'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Slider() {
    const [index , setIndex] = useState(1);
    
    const image = [img1,img2,img3];
    const leftHead = ['Saved' , 'Grew MRR By' , 'Achieved'];
    const leftTag = ['105 hrs' , '15%' ,'20x']
    const lefth2 = ['is simply dummy text of the printing', 'ofessor at Hampden-Sydney College in Virginia' ,'more recently with desktop']
    const background_color = ['linear-gradient(180deg,#47499b 0,#242565 100%)' , 
        'linear-gradient(180deg,#f2a720 0,#bc7e0f 100%)',
        'linear-gradient(180deg,#438b8b 0,#124e4e 100%)'
    ]
    
    const rightPara = ['industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown prin a type specimen book. It has survivedessentially unc of Letraseassages, and more recently with desktop' , 
    'to using Content here, contenpackages and web page editors now use Lorem Ipsum as their default model text, and a st, sometimes on purpose (injected humour and the like).',
    'It hofessor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the nd t sheets containing Lorem Ipsum p'
    ]
    
    const names = ['Bonorum et Malorum' , 'Latin professor' , 'Lorem Ipsum']
    const position = ['Teacher' , 'Ceo' , 'Finance']
    
    // this will increase the slider index to +1
    const next = () => setIndex((index + 1) % 3);
    // this will decrease the slider index by 1 
    const prev = () => setIndex((index - 1 + 3 ) % 3);
        

    return (
        <div className="slider">
          
            <Grid container  className = "slider-container" >
            <Grid container justify="center">
                <Grid item xs={4} md={2}   >
                    {index === 0 ? <h6 className="slider__h6"  >Rethink Pricing</h6> :
                    <h6 onClick={() =>setIndex(0)} >Rethink Pricing</h6> }
                </Grid>
                <Grid item xs={4} md={2} >
                {index === 1 ? <h6 className="slider__h6"  >Automate FinOps</h6> :
                     <h6 onClick={() =>setIndex(1)} >Automate FinOps</h6> }
                   
                </Grid>
                <Grid item xs={4} md={2}  >
                {index === 2 ? <h6 className="slider__h6"  >Go Global</h6> :
                     <h6 onClick={() =>setIndex(2)} >Go Global</h6> }
                    
                </Grid>
            </Grid>
            <Grid container className="slider__grid--card" >
                <Grid item xs={12} md={5} style={{background: background_color[index]}} className="slider__grid--left" >
                <IconButton  className = "slider__button--prev" onClick={prev}>
                    <ArrowBackIcon />     
                </IconButton>
                    <h4>{leftHead[index]}</h4>
                    <h1>{leftTag[index]}</h1>
                    <h2> {lefth2[index]} </h2>
                    <hr className="slider__hr" />
                    <Button className="slider__button"
                     variant="outline">Learn more</Button>
                </Grid>
                <Grid item xs={12} md={7} className="slider__grid--right" >
                <IconButton  className = "slider__button--next" onClick={next}>
                    <ArrowForwardIcon />     
                </IconButton>
                    <p>{rightPara[index]}</p>
                    <div>
                        <h1>{names[index]}</h1>
                        <h2>{position[index]}</h2>
                    </div>
                    <img src={image[index]} />
                </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Slider
