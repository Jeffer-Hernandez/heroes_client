import react from 'react'


const CommentCard = (props) =>{

    console.log(props)

    return(
        <div className="HeroCard">
            {<h1>{props.userComment.content}</h1>}
        </div>
    )

}

export default CommentCard