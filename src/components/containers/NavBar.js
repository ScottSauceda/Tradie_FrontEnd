import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';
import { Tradie } from '../views';

import { fetchSelectedTradie } from '../../actions'



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faShower, faScrewdriver, faPaintRoller, faBoxOpen, faHome, faPlus, faUser, faUserPlus, faMagic } from '@fortawesome/free-solid-svg-icons'
library.add(faHammer, faShower, faScrewdriver, faPaintRoller, faBoxOpen, faHome, faPlus, faUser, faUserPlus, faMagic)

 

class Navbar extends Component {

  state = {
    tradies: '',
    electrician: 'Electrician',
    plumber: 'Plumber',
    laborer: 'Laborer',
    mover: 'Mover',
    painter: 'Painter'
  }

  getTradeHandler = (tradies, e) => {
    e.preventDefault()
    console.log('cliked', tradies)
    this.props.fetchSelectedTradie(tradies);
  }


render() {


  return (
    <nav className="nav-bar">
      <div className="container">
      <span className="logo">
      <FontAwesomeIcon icon="magic" />
      </span>
        <ul className="">
        
          <li>
              <NavLink to="/">
              <FontAwesomeIcon icon="home" /> Home
              </NavLink>
            </li>

        <li>
            <NavLink to="/register">
            <FontAwesomeIcon icon="user-plus" /> Register
            </NavLink>
        </li>

        <li>
            <NavLink to="/login">
            <FontAwesomeIcon icon="user" /> Log In
            </NavLink>
        </li>

            <li>
              <button className="btn btn-primary"  id='electrician' name='electrician' onClick={this.getTradeHandler.bind(this, this.state.electrician)}>
                <FontAwesomeIcon icon="screwdriver" />Electrician
              </button>
            </li>

            <li>
              <button className="btn btn-primary"  id='plumber' name='plumber' onClick={this.getTradeHandler.bind(this,this.state.plumber)}>
              <FontAwesomeIcon icon="shower" /> Plumber
              </button>
            </li>

            <li>
              <button className="btn btn-primary"  id='laborer' name='laborer' onClick={this.getTradeHandler.bind(this, this.state.laborer)}>
              <FontAwesomeIcon icon="hammer" /> Laborer
              </button>
            </li>

            <li>
              <button className="btn btn-primary"  id='mover' name='mover' onClick={this.getTradeHandler.bind(this, this.state.mover)}>
              <FontAwesomeIcon icon="box-open" /> Mover
              </button>
            </li>

            <li>
              <button className="btn btn-primary"  id='painter' name='painter' onClick={this.getTradeHandler.bind(this, this.state.painter)}>
              <FontAwesomeIcon icon="paint-roller" /> Painter
              </button>
            </li>

          <li>
              <NavLink to="/addtrade">
              <FontAwesomeIcon icon="plus" /> Add a Trade
              </NavLink>
            </li>
         
        </ul>
      </div>
    </nav> 
  )
  }
}

const stateToPropsTrades = (state) => {
  return {
    mapTrade: state.tradieFromStore
  }
}

export default connect(stateToPropsTrades, {fetchSelectedTradie})(Navbar);