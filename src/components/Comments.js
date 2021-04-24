import React from 'react'


const Comments = (props) => {


    return(
        <div className="Comments">
            {/* make comment content render */}
            {props.map(comment=> <li>{comment.content}</li>)}

        </div>
    )

}

export default Comments