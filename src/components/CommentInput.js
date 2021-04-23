import React from 'react'

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

    handleSubmit = () =>{

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

export default CommentInput