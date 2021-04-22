import React from 'react'


import HeroContainer from './containers/HeroContainer'
import {fetchHeroes} from './actions/fetchHeroes'
import {connect} from 'react-redux'


class App extends React.Component {

  componentDidMount(){
 
    this.props.fetchHeroes()
    
  }



  render(){
    return (
      <div className="App">
       <HeroContainer heroes={this.props.heroes.data}/>
        
      </div>
    );
  }
}

const mapStateToProps = state =>{

  return{
      heroes: state.heroes
  }

}

export default connect(mapStateToProps, {fetchHeroes}) (App)
