import React from 'react'
import {Route} from 'react-router-dom'
import HeroContainer from './containers/HeroContainer'


class App extends React.Component {

  render(){
    return (
      <div className="App">
       <Route path='/heroes' component={HeroContainer}/>
      </div>
    );
  }
}


export default App
