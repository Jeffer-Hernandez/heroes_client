import React from 'react'
import {fetchHeroes} from '../actions/fetchHeroes'
import {connect} from 'react-redux'
import HeroCard from '../components/HeroCard'




class HeroContainer extends React.Component {

   

    
    heroData = () => {

        //console.log(data)
        debugger
        //const newData= Object.values(data);
        // newData is an array named "data" which is the value to the 
        // key of data being passed in from this.props.heroes
    
        
        return this.props.heroes.map(function(hero) {
            debugger
            console.log(hero)
            return <HeroCard hero={hero.id}/>
        })
        // the "hero" being passed in is a hero object which is an element of
        // an array named "data"

        
    }

    render() {
  
        
            
        return(
        <div className="HeroContainer">
            
           {this.heroData()}
              
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