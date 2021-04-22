import React from 'react'
import {fetchHeroes} from '../actions/fetchHeroes'
import {connect} from 'react-redux'
import HeroCard from '../components/HeroCard'




class HeroContainer extends React.Component {
debugger
   

    
    heroData = (data) => {
        return data.map(hero => <HeroCard hero={hero}/>)
        // the "data" in data.map is an object with key value pairs "data: array[0]"
        // extract the array from this object and THEN call map on it in this way.
    }

    render() {
        debugger
        
            
        return(
        <div className="HeroContainer">
            
            {/* Use map to pass in an array of heroes and create as many 
            HeroCards as there are heroes*/}
           {this.heroData(this.props.heroes)}
            {/* {this.props.heroes.data.map(hero =>{<HeroCard hero={hero}/>})} */}
            
            
        </div>
        )

    }
}

const mapStateToProps = state =>{

    return{
        heroes: state.heroes
    }

}

export default connect(mapStateToProps, {fetchHeroes})(HeroContainer)