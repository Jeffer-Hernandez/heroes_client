import React from 'react'
import {fetchHeroes} from '../actions/fetchHeroes'
import {connect} from 'react-redux'
import HeroCard from '../components/HeroCard'




class HeroContainer extends React.Component {

    componentDidMount(){
        this.props.fetchHeroes()
        
    }

    
    

    render() {
        // const heroData = Object.values(props.heroes.data);
        return(
        <div className="HeroContainer">
            
            {/* Use map to pass in a hero object and create as many 
            HeroCards as there are heroes*/}
           {heroData.map(hero => (
            <HeroCard hero={hero}/>
            ))}
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