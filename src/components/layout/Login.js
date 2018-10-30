import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Nav from '../containers/NavBar'
import { loginUser } from '../../actions/index'


class Login extends Component {

  state = {
    email: '',
    password: '',
    errors: {}
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/')
    }

    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors})
    }
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()

    const userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userInfo)
  }

  render() {
    const { errors } = this.state
    return (
      <React.Fragment>
      <div className="row">
      {/* loads navbar */}
      <div className = "col-2">
        <Nav />
      </div>

        {/* loads page content */}
        <div className = "col-10 output">
          <form className="form" onSubmit={this.submitHandler} >
          <h1 style={{textAlign: 'center', marginTop: "30px"}} className="center">Login</h1>
            <input type="email" placeholder="Email" name="email" value={this.state.email} error={errors.email} onChange={this.inputHandler}  />
            <br/>
            <br/>
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.inputHandler} error={errors.password} />
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

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))