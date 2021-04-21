import React from 'react'
import {connect} from 'react-redux'
import {fetchHeroes} from './actions/fetchHeroes'
import HeroContainer from './containers/HeroContainer'



class App extends React.Component {



  render(){
    return (
      <div className="App">
       <HeroContainer/>
        
      </div>
    );
  }
}


export default App
