import React, { Component } from 'react'
import { connect } from 'react-redux'


import Nav from '../containers/NavBar'
import { addTrade } from '../../actions'


class AddTrade extends Component {
  state = {
    businessName: '',
    job: '',
    businessDescription: '',
    businessPhone: '',
    businessEmail: '',
    businessAddress: {},
    zipCode: '',
    state: '',
    city: '',
    streetAddress: '',
    address2: '',
    errors: {}
  }
  
  tradeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      console.log(this.state)
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    
    let businessAddressObj = {
      businessEmail: this.state.businessEmail,
      streetAddress: this.state.streetAddress,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode
    }


    this.setState({
      businessAddress: businessAddressObj
    }, () => {
      const newTrade = {
        businessName: this.state.businessName,
        job: this.state.job,
        businessDescription: this.state.businessDescription,
        businessPhone: this.state.businessPhone,
        businessEmail: this.state.businessEmail,
        businessAddress: this.state.businessAddress
      }
      this.props.addTrade(newTrade)
    })

    e.target.reset()
  }
  
  render() {
    const errors = {}
    return (
        <React.Fragment>
            <div className="row">
                {/* loads navbar */}
                <div className = "col-2">
                  <Nav />
                </div>

            {/* loads page content */}
                <div className = "col-10 output">
                  
                    <form className = "addForm" onSubmit={this.submitHandler} style={{ marginTop: '10px'}}>

                    <h1 style={{textAlign: 'center', marginTop: '30px'}}> Add a Trade</h1>

                    <input type="text" className="form-control col-4 largeFont marginSpace" name="businessName" placeholder="Business Name" onChange={this.tradeHandler} value={this.state.businessName} error = {errors.businessName}/>

                    {/* <input type="text" class="form-control col-4 largeFont marginSpace" name="job" placeholder="Job"/> */}

                  <div className="dropdown marginSpace" >

                      <select className="selectpicker" data-style="btn-info"  name="job" onChange={this.tradeHandler}>

                          <optgroup label="Select Table">
                              <option className="dropdown-item" name="" value="0">Select Job</option>
                              <option name="Electrician" value='Electrician' error={errors.job}>Electrician</option>
                              <option name="Plumber" value='Plumber' error={errors.job}>Plumber</option>
                              <option name="Carpenter" value='Laborer' error={errors.job}>Laborer</option>
                              <option name="Carpenter" value='Mover' error={errors.job}>Mover</option>
                              <option name="Painter" value='Painter' error={errors.job}>Painter</option>
                          </optgroup>

                      </select>

                  </div>
    

                  <textarea id="businessDescription" className="form-control col-7 largeFont marginSpace" name="businessDescription" rows="5" placeholder="Business Description" onChange={this.tradeHandler} value={this.state.businessDescription} error={errors.businessDescription}></textarea>

                  <input type="tel" id="number" className="form-control col-4 largeFont marginSpace" name="businessPhone" placeholder="Business Phone" onChange={this.tradeHandler} value={this.state.businessPhone} error={errors.businessPhone}/>

                  <input type="email" id="email" className="form-control col-4 largeFont marginSpace" name="businessEmail" placeholder="Business Email" onChange={this.tradeHandler} value={this.state.businessEmail} error={errors.businessEmail}  />

                    <div className="form-group">
                      <input type="text" className="form-control largeFont" name="streetAddress" id="inputAddress" placeholder="Business Street Address"  onChange={this.tradeHandler}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control largeFont" name="address2" id="inputAddress2" placeholder="Suite, Floor, etc." onChange={this.tradeHandler}/>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control largeFont" name="city" id="inputCity" placeholder="City" onChange={this.tradeHandler}/>
                      </div>
                      <div className="form-group col-md-2">
                        <input type="text" className="form-control largeFont" name="state" id="inputState" placeholder="State" onChange={this.tradeHandler}/>
                      </div>
                    
                      <div className="form-group col-md-2">
                        <input type="text" className="form-control largeFont" name="zipCode" id="inputZip" placeholder="Zip Code"  onChange={this.tradeHandler}/>
                      </div>
                    </div>

                  <button type="submit" className="btn btn-primary col-2" style={{ marginTop: '10px'}}>Create</button>
                 
                  </form>

                </div>
            </div>

            </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  trade: state.trade
})
export default connect(mapStateToProps, { addTrade })(AddTrade)