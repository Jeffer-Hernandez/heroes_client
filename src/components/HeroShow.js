import React from 'react'
import CommentContainer from '../containers/CommentContainer'
import HeroCard from './HeroCard'

const HeroShow = (props) =>{

    let hero = props.heroes[props.match.params.id - 1]
    debugger
    console.log(props)
    return(
        <div className="HeroShow">
            <HeroCard/>
            <CommentContainer heroId={hero.id} heroComments={hero.attributes.comments}/>
        </div>
        
    )

}

export default HeroShow