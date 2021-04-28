import React from 'react'
import {Route} from 'react-router-dom'
import CommentContainer from '../containers/CommentContainer'




const HeroCard = (props) =>{
    // debugger
    console.log(props)

    return(
        <div key={props.heroId} className="HeroCard">
            {<h1>{props.heroName}</h1>}
            {<h3>{props.heroImage}</h3>}
            {<h3>{props.heroDescription}</h3>}      
            <CommentContainer heroId={props.heroId} comments={props.comments} />
        </div>
    )

}

export default HeroCard

//"nested routes" - posts/1/comments/new or posts/1/comments/3
//"nested routes" - in react is really just "dynamic" routes (which could ALSO be nested) - posts/:id
//neither are required for this project
//just 3 routes are required - e.g. /about, /heroes, /home