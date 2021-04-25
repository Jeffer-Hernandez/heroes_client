import React from 'react'
import {Route} from 'react-router-dom'
import HeroShow from '../components/HeroShow'



const HeroCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {<h1>{props.heroName}</h1>}
            {<h1>{props.heroImage}</h1>}
            {<h1>{props.heroDescription}</h1>}      
            <Route path='/heroes/:id' render={(routerProps)=> <HeroShow {...routerProps} heroes={props}/>}/>      
        </div>
    )

}

export default HeroCard