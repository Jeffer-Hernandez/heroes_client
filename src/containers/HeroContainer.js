import React from 'react'
import {fetchHeroes} from '../actions/fetchHeroes'
import {connect} from 'react-redux'
import HeroCard from '../components/HeroCard'




class HeroContainer extends React.Component {

   

    
    heroData = () => {


        return this.props.heroes.map(function(hero) {
            // debugger
            console.log(hero.attributes.comments)
            return <HeroCard heroId={hero.id} heroName={hero.attributes.name} heroDescription={hero.attributes.description} 
            heroImage={hero.attributes.image_url} heroComments={hero.attributes.comments}/>
        })

        
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