export function fetchHeroes() {
    fetch('http://localhost:3000/api/v1/heroes')
    .then(resp => resp.json())
    .then(data => console.log(data))

}