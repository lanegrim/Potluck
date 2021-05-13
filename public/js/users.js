class Users extends React.Component {
  render = () => {
    return (

      <div>

        <br/>
        <form className="newUser" onSubmit={this.props.newUser}>
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="username">Username</label>
              <input className="form-control" onChange={this.props.handleUser} type="text" id="username" value={this.props.userInput.username} required/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-control" onChange={this.props.handleUser} type="password" id="password" value={this.props.userInput.password} required/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="picture">Profile Picture</label>
              <input className="form-control" onChange={this.props.handleUser} type="text" id="picture" value={this.props.userInput.picture} />
            </div>
          </div>
            <br/>
            <input className="btn btn-primary" type="submit" value="Register" />
        </form>
        <br/>


        <br/>
        <form className="newSession" onSubmit={this.props.newSession}>
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="username">Username</label>
              <input className="form-control" onChange={this.props.handleUser} type="text" id="username" required/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-control" onChange={this.props.handleUser} type="password" id="password" required/>
            </div>
          </div>
          <br/>
          <input className="btn btn-primary" type="submit" value="Log In" />
        </form>
        <br/>

      </div>

    )
  }
}
