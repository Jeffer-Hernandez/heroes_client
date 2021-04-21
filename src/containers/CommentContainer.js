import React from 'react'
import {connect} from 'react-redux'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'




class CommentContainer extends React.Component {

    componentDidMount(){
        
    }

    render() {
        return(
        <div className="CommentContainer">
           
            <CommentInput/>
            <Comments/>
        </div>
        )

    }
}

const mapStateToProps = state =>{

    return{
        comments: state.comments
    }

}

// export default Connect(mapStateToProps)(CommentContainer)
export default connect()(CommentContainer)