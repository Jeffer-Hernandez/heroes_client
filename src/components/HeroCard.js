import React from 'react'



const HeroCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {<h1>{props.heroName}</h1>}
            {<h1>{props.heroImage}</h1>}
            {<h1>{props.heroDescription}</h1>}            
        </div>
    )

}

export default HeroCard