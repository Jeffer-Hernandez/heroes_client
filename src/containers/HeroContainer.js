import React from 'react'
import CommentContainer from './CommentContainer'
import {fetchHeroes} from '../actions/fetchHeroes'
import {connect} from 'react-redux'
import Heroes from '../components/Heroes'




class HeroContainer extends React.Component {

    componentDidMount(){
        this.props.fetchHeroes()

    }

    render() {
        return(
        <div className="HeroContainer">
            HeroContainer
            <CommentContainer/>
            <Heroes heroes={this.props.heroes}/>
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