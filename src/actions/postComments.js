

export const postComments = (data) => {

    return (dispatch)=>{
        fetch('http://localhost:3000/api/v1/comments', {
            headers: {
                'Content_Type': 'application/json',
                'Accept': 'content/json'
            },
            method: 'POST',
            body: JSON.stringify(data)

        })
        .then(resp => resp.json())
        .then(comment => dispatch({
            type: 'POST_COMMENT',
            payload: comment
        })
        )
    }
   

}