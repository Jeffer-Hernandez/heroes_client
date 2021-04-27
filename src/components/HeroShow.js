import React from 'react'
import CommentContainer from '../containers/CommentContainer'
import HeroCard from './HeroCard'

const HeroShow = (props) =>{

    let hero = props.heroes
    // debugger
    //hero is not being populated. remains undefined.

    console.log(hero)

    return(
        <div className="HeroShow">
            <HeroCard heroId={hero.id} heroName={hero.attributes.name} heroDescription={hero.attributes.description}
            heroImage={hero.attributes.image_url} heroComments={hero.attributes.comments}/>
            <CommentContainer heroId={hero.heroId} heroComments={hero.heroComments}/>
        </div>
        
    )

}

export default HeroShow