class Edit extends React.Component {
  render = () => {
    return (
      <div>
      <details>

        <summary>Edit your recipe</summary>

        <form className="editRecipe" id={this.props._id} onSubmit={this.props.updateRecipe}>

          <div className="row">
            <div className="col-6">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" id="title"
                onChange={this.props.handleChange} />
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="duration">Duration</label>
              <input className="form-control" type="text" id="duration"
                onChange={this.props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="tags">Tags</label>
              <input className="form-control" type="text" id="tags"
                onChange={this.props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="image">Image</label>
              <input className="form-control" type="text" id="image"
                onChange={this.props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="ingredients">Ingredients</label>
              <input className="form-control" type="text" id="ingredients"
                onChange={this.props.handleChange} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="methods">Methods</label>
              <input className="form-control" type="text" id="methods"
                onChange={this.props.handleChange} />
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col">
              <input className="btn btn-success" type="submit" value="Update Recipe" />
            </div>
          </div>

        </form>

      </details>
      </div>
    )

  }
}
