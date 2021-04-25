import React from 'react'
import CommentContainer from '../containers/CommentContainer'
import HeroCard from './HeroCard'

const HeroShow = (props) =>{

    let hero = props.heroes[props.match.params.id - 1]

    //hero is not being populated. remains undefined.

    console.log(hero)

    return(
        <div className="HeroShow">
            <HeroCard/>
            <CommentContainer heroId={hero.heroId} heroComments={hero.heroComments}/>
        </div>
        
    )

}

export default HeroShow