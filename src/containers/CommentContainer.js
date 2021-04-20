import React from 'react'
import {Connect} from 'react-redux'
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

const mapStateToProps = (state) =>{

    return(
        comments: state.Comments
    )

}

export default Connect(mapStateToProps)(CommentContainer)