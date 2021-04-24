import React from 'react'


const CommentCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {<h1>{props.userComment}</h1>}
        </div>
    )

}

export default CommentCard