export default function heroReducer(state = {heroes: []}, action ) {
    debugger
   switch(action.type){
    
    case 'FETCH_HEROES':
        return {heroes: action.payload}
    default:
        return state

   }

}