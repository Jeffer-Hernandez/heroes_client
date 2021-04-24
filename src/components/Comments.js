import React from 'react'
import CommentCard from './CommentCard'


const Comments = (props) => {

    return props.heroComments.map(function(comment) {
        // debugger
        console.log(comment.content)
        return <CommentCard userComment={comment.content}/>
    })
  
}

export default Comments