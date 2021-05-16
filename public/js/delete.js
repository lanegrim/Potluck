class Delete extends React.Component {
  render = () => {
    if (this.props.currentUser.username === this.props.recipe.owner) {
      return (
        <div>
          <div className="deleteDiv">
            <button className="btn btn-danger deleteRecipeButton"
            onClick={this.props.deleteRecipe} value={this.props._id}>Delete Recipe</button>
          </div>
        </div>
      )
    } else {
      return (
        null
      )
    }
  }
}
