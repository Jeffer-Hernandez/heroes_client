import React from 'react'


const CommentCard = (props) =>{

    console.log(props)

    return(
        <div key={props.userComment.id} className="HeroCard">
            {<p>{props.userComment}</p>}
        </div>
    )

}

export default CommentCard