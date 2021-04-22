import React from 'react'
import CommentContainer from '../containers/CommentContainer'


const HeroCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {<h1>{props.hero}</h1>}
            <CommentContainer/>
        </div>
    )

}

export default HeroCard