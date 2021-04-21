import React from 'react'

import CommentInput from '../components/CommentInput'
import Comments from '../components/Heroes'





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

const mapStateToProps = state =>{

    return{
        heroes: state.heroes
    }

}

export default CommentContainer

