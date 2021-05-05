import React from 'react'
import {connect} from 'react-redux'


class CommentCard extends React.Component {

    state = {
        content: '',
        hero_id: this.props.heroId,
        comment_id: this.props.userComment.id,
        like_count: 0
    }

  

     handleClick = (event) =>{
        
        event.preventDefault()
        // this.props.postComment(this.state)
        this.setState({
            content: '',
            hero_id: this.props.heroId,
            like_count: this.state.like_count +1

        })
    }

    render(){
        const handleClick = this.handleClick
        return(
            <div key={this.props.userComment.id} className="CommentCard">
                {<p>{this.props.userComment}</p>}
                {<p>{this.state.like_count}</p>}
                <button onClick={handleClick}>Like</button>
            </div>
        )
    }
}

export default CommentCard

// export default connect(null, )(CommentInput)