

export const postComments = (data) => {

    return (dispatch)=>{
        fetch('http://localhost:3000/api/v1/comments', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)

        })
        .then(response => response.json())
        .then(comment => dispatch({
            type: 'POST_COMMENT',
            payload: comment
        })
        )
    }
   

}