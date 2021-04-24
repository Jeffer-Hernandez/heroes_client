

//this will update the state of the store to include the newest comment
export default function commentReducer(state = {comments: []}, action ) {

    switch(action.type){
     
     case 'POST_COMMENT':
         return {...state, comments: [...state.comments, action.payload]}
     default:
         return state
     
         
 
    }
 
 }