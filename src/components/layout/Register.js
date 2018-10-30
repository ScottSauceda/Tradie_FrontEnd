import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


import Nav from '../containers/NavBar'
import { createUser } from '../../actions'


class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordTwo: '',
    errors: {}
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
  }

  componentDidUpdate(prevProps, prevState) {
      
    if (prevProps.errors !== this.props.errors) {
      this.updateErrorState(this.props.errors)
    }
  }

  updateErrorState = (errors) => {
  this.setState({ errors: errors })
  }
  
  registerHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordTwo: this.state.passwordTwo
    }
    this.props.createUser(newUser, this.props.history)
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
                  <form className="form" onSubmit={this.submitHandler}>
        
        
                  <h1 style={{textAlign: 'center', marginTop: '30px'}}> Register</h1>
                  <br />
        
                      <input type="text" placeholder="Name" name ="name" onChange={this.registerHandler} value={this.state.name} error = {errors.name}/>
        
        
                      <br/>
                      <br/>
        
                      <input type="email" placeholder="Email" name="email" onChange={this.registerHandler} value={this.state.email} error = {errors.email}  />
        
        
                      <br/>
                      <br/>
        
        
                      <input type="password" placeholder="Password" name="password" onChange={this.registerHandler} value={this.state.password} error = {errors.pssword}/>
        
        
                      <br/>
                      <br/>
        
        
                      <input type="password" placeholder="Confirm password" name="passwordTwo"  onChange={this.registerHandler} value={this.state.passwordTwo} error = {errors.passwordTwo}/>
        
        
                      <br/>
                      <br/>
        
        
                      <button className="btn btn-primary" type="submit">Enter</button>
        
        
                  </form>
                </div>

            </div>
            </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth
})
export default connect(mapStateToProps, { createUser })(withRouter(Register))
