import React from 'react'
import {fetchHeroes} from '../actions/fetchHeroes'
import {connect} from 'react-redux'
import HeroCard from '../components/HeroCard'
import {Route} from 'react-router-dom'
import HeroShow from '../components/HeroShow'





class HeroContainer extends React.Component {

    componentDidMount(){
 
        this.props.fetchHeroes()
        
    }

    
    heroData = () => {
        console.log(this.props.heroes)
        return this.props.heroes.map(function(hero) {
            // debugger
            // console.log(this.props.heroes)
            return <HeroCard heroId={hero.id} heroName={hero.attributes.name} heroDescription={hero.attributes.description}
            heroImage={hero.attributes.image_url} heroComments={hero.attributes.comments}/>
        })
        
    }

    render() {
  
        return(
        <div className="HeroContainer">
            
           {this.heroData()}
           <Route path='/heroes/:id' render={(routerProps)=> <HeroShow {...routerProps} heroes={this.props.heroes}/>}/>

           {/* route for heroShow at /heroes/id? */}
           {/* see how links are made, make a link from superhero picture to heroShow */}
              
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