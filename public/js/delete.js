class Delete extends React.Component {
  render = () => {
    if (this.props.currentUser === this.props.owner) {
      return (
        <div>
          <br />
          <button className="btn btn-danger" onClick={this.props.deleteRecipe} value={this.props._id}>
            Delete Recipe
        </button>
        </div>
      )
    }
  }
}
