export default function heroReducer(state = {heroes: []}, action ) {
    
    let idx;
    let comment;

   switch(action.type){
    
        case 'FETCH_HEROES':
            // debugger
            // return {heroes: action.payload}
            return{
            
                heroes: action.payload
                // comments: [...state.comments]
            
            };

        case 'POST_COMMENT':
                
                idx = action.payload.hero_id - 1;

            return{
                ...state,
                heroes: [...state.heroes],
                    [idx]: [state.heroes[idx]],
                        attributes: [state.heroes[idx].attributes],
                            comments: state.heroes[idx].attributes.comments.push(action.payload)
                            
                                
            }

            
            
        
        
        default:
            return state


    }
}