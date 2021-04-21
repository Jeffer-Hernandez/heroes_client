import React from 'react'


const Heroes = (props) =>{

    console.log(props)
    return(
        <div>
            {props.data[0].attributes.name.map(hero => <li>{hero.name}</li>)}
        </div>
    )

}

export default Heroes