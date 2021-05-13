class Delete extends React.Component {
  render = () => {
    if (this.props.currentUser.username === this.props.recipe.owner) {
      return (
        <div>
          <br />
          <button className="btn btn-danger" onClick={this.props.deleteRecipe} value={this.props._id}>
            Delete Recipe
        </button>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}
