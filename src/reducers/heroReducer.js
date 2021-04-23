export default function heroReducer(state = {heroes: []}, action ) {
  
   switch(action.type){
    
    case 'FETCH_HEROES':
        // debugger
        return {heroes: action.payload}
    default:
        return state

   }

}