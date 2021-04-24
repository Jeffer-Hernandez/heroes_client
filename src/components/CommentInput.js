import React from 'react'
import {connect} from 'react-redux'
import {postComments} from '../actions/postComments'

class CommentInput extends React.Component {

    state = {
        content: '',
        hero_id: this.props.heroId
    }

    handleChange = (event) =>{

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.postComments(this.state)
        this.setState({
            content: '',
            hero_id: this.props.heroId
        })
    }


    render(){
        return(

            <div className="CommentInput">
                <form onSubmit={this.handleSubmit}>
                    <input type= "text" placeholder="What's on your mind?" value={this.state.content} name="content" onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>


        )

    }
}



export default connect(null, {postComments})(CommentInput)