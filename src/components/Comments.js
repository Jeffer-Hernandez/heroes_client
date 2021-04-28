import React from 'react'
import CommentCard from './CommentCard'


const Comments = (props) => {

    return props.comments.map(function(comment) {
        return <CommentCard key={comment.id} userComment={comment.content}/>
    })
  
}

export default Comments