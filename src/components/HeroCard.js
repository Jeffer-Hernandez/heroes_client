import React from 'react'
import CommentContainer from '../containers/CommentContainer'


const HeroCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {this.props.hero}
            <CommentContainer/>
        </div>
    )

}

export default HeroCard