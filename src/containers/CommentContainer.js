import React from 'react'
import {connect} from 'react-redux'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'





class CommentContainer extends React.Component {

    // debugger
    
    render() {
        console.log(this.props)
        return(
        <div className="CommentContainer">
           
            <CommentInput heroId={this.props.heroId}/>
            <Comments comments={this.props.comments} />
            

        </div>
        )

    }
}



export default CommentContainer



