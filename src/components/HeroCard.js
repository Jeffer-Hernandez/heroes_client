import React from 'react'
import CommentContainer from '../containers/CommentContainer'


const HeroCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {<h1>{props.heroName}</h1>}
            {<h1>{props.heroImage}</h1>}
            {<h1>{props.heroDescription}</h1>}
            <CommentContainer heroId={props.heroId}/>
        </div>
    )

}

export default HeroCard