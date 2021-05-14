class Users extends React.Component {
  state = {
    registerHidden: true,
  }

  showRegistration = () => {
    this.setState({
      registerHidden: !this.state.registerHidden
    })
  }

  render = () => {
    if (this.state.registerHidden === true) {
      return (
        <div>
          <div className="sessionDiv">
            <form className="newSession" onSubmit={this.props.newSession}>
              <fieldset>
                <legend>Welcome!</legend>
                  <div className="row mb-3">
                    <div className="col-11">
                      <label className="form-label" htmlFor="username">Username</label>
                      <input className="form-control" onChange={this.props.handleUser} type="text" id="username" value={this.props.userInput.username} required />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-11">
                      <label className="form-label" htmlFor="password">Password</label>
                      <input className="form-control" onChange={this.props.handleUser} type="password" id="password" value={this.props.userInput.password} required />
                    </div>
                  </div>
                  <div className="loginDiv">
                    <input className="btn btn-success loginButton " type="submit" value="LOG IN" />
                  </div>
              </fieldset>
            </form>
          </div>
          <div className="authDiv">
            <button className="btn toggleAuth" onClick={this.showRegistration}>No Account? Sign Up!</button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h2>Register</h2>
          <br />
          <form className="newUser" onSubmit={this.props.newUser}>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="username">Username</label>
                <input className="form-control" onChange={this.props.handleUser} type="text" id="username" value={this.props.userInput.username} required />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" onChange={this.props.handleUser} type="password" id="password" value={this.props.userInput.password} required />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="form-label" htmlFor="picture">Profile Picture</label>
                <input className="form-control" onChange={this.props.handleUser} type="text" id="picture" value={this.props.userInput.picture} />
              </div>
            </div>
            <br />
            <input className="btn btn-primary" type="submit" value="Register" />
          </form>
          <button className="btn btn-outline-primary" onClick={this.showRegistration}>Have an Account? Log In!</button>
          <br />

        </div>
      )
    }
  }
}
