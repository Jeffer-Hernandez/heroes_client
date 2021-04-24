import React from 'react'

import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'





class CommentContainer extends React.Component {

    

    render() {
        return(
        <div className="CommentContainer">
           
            <CommentInput heroId={this.props.heroId}/>
            <Comments heroComments={this.props.heroComments}/>
            

        </div>
        )

    }
}


export default CommentContainer

