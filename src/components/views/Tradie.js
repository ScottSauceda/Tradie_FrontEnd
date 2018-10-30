import React, { Component } from 'react'
import { connect } from 'react-redux'


class Tradie extends Component {
 
  render() {

    let trades

    if(this.props.mapTrade.tradieArray !== null) {
      trades = this.props.mapTrade.tradieArray.map( (trade, index) => {
        console.log(trade)
        return (
          <div key={index}>
            <div>
              <h1>{trade.businessName}</h1>
            </div>
          </div>
        )
      })
    } else {
      trades = '';
    }
  


    return (
      <div>
         {trades}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  mapTrade: state.tradieFromStore
})

export default connect(mapStateToProps, null)(Tradie);