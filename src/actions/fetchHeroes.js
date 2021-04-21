export function fetchHeroes() {
    return (dispatch)=>{
        fetch('http://localhost:3000/api/v1/heros')
        .then(resp => resp.json())
        .then(heroes => dispatch({
            type: 'FETCH_HEROES',
            payload: heroes
        })
        )
    }
   

}