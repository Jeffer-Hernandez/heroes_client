import React from 'react'


const CommentCard = (props) =>{

    console.log(props)

    return(
        <div key={props.userComment.id} className="HeroCard">
            {<h1>{props.userComment}</h1>}
        </div>
    )

}

export default CommentCard