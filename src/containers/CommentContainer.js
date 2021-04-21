import React from 'react'

import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'





class CommentContainer extends React.Component {

    

    render() {
        return(
        <div className="CommentContainer">
           
            <CommentInput/>
            <Comments/>
            

        </div>
        )

    }
}


export default CommentContainer

