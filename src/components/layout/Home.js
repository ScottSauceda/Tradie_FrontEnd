import React, { Component } from 'react';
import { Geos, NavBar } from '../containers';

import { connect } from 'react-redux';
import { Tradie } from '../views';

import {
    getUserCurrentLocation
} from '../../actions';

class Home extends Component {

    componentDidMount() {
        this.props.getUserCurrentLocation();
    }


    render() {
        return (
            <React.Fragment>
            <div className="row">
            {/* loads navbar */}
                <div className = "col-2">
                    <NavBar />
                </div>
                {/* loads map */}
                <div className = "col-5" >
                    <Geos  />
                </div>
                {/* loads page content */}
                <div className = "col-5 output">
                    <Tradie />
                </div>
            </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    map: state.mapFromStore
})

export default connect(mapStateToProps, {
    getUserCurrentLocation
}) (Home)