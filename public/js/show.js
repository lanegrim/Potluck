class Show extends React.Component {
  state = {
    hidden: true,
  }

  hideDetails = (params) => {
    this.setState({
      hidden: !this.state.hidden
    })
  }

  render = () => {
    if (!this.state.hidden) {
      return (
        <div className="showCard">
          <div className="chipDiv">
            <div className="ownerChip">
              <img className="showPicture" src={this.props.recipe.ownerPicture} alt={this.props.recipe.owner} />
              <b>{this.props.recipe.owner}'s Recipe</b>
            </div>
          </div>
          <div className="card-header">
            <h1><b>{this.props.recipe.title}</b></h1>
            <h4>Recipe Type: <b>{this.props.recipe.type}</b></h4>
            <h4>Prep and Cook Time: <b>{this.props.recipe.duration}</b></h4>
            <div className="imageDiv">
              <img className="showImage" src={this.props.recipe.image}
                alt={this.props.recipe.title} />
            </div>
            <div className="showDiv">
              <button className="btn showRecipeButton"
                onClick={this.hideDetails}>Show Recipe</button>
            </div>
          </div>

          <div className="recipeShow">
            <h4><b>Ingredients</b></h4>
            <ul>
              {this.props.recipe.ingredients.map((ingredient) => {
                return (
                  <li key={ingredient}>
                    {ingredient}
                  </li>
                )
              })}
            </ul>

            <h4 className="methodH4"><b>Method</b></h4>
            <ol>
              {this.props.recipe.methods.map((method) => {
                return (
                  <li key={method}>
                    {method}
                  </li>
                )
              })}
            </ol>
          </div>

          <Edit
            currentUser={this.props.currentUser}
            recipe={this.props.recipe}
            handleSubmit={this.props.handleSubmit}
            handleChange={this.props.handleChange}
            _id={this.props.recipe._id}
            ingredients={this.props.ingredients}
            updateRecipe={this.props.updateRecipe}
            addIngredient={this.props.addIngredient}
            removeIngredient={this.props.removeIngredient}
            methods={this.props.methods}
            addMethod={this.props.addMethod}
            removeMethod={this.props.removeMethod}
            title={this.state.title}
            duration={this.state.duration}
            type={this.state.type}
            image={this.state.image}
          ></Edit>

          <Delete
            currentUser={this.props.currentUser}
            recipe={this.props.recipe}
            deleteRecipe={this.props.deleteRecipe}
            _id={this.props.recipe._id}
          ></Delete>
        </div>
      )
    } else {
      return (
        <div className="showCard">
          <div className="chipDiv">
            <div className="ownerChip">
              <img className="showPicture" src={this.props.recipe.ownerPicture} alt={this.props.recipe.owner} />
              <b>{this.props.recipe.owner}'s Recipe</b>
            </div>
          </div>
          <div className="card-header">
            <h1><b>{this.props.recipe.title}</b></h1>
            <h4>Recipe Type: <b>{this.props.recipe.type}</b></h4>
            <h4>Prep and Cook Time: <b>{this.props.recipe.duration}</b></h4>
            <div className="imageDiv">
              <img className="showImage" src={this.props.recipe.image}
                alt={this.props.recipe.title} />
            </div>
            <div className="showDiv">
              <button className="btn showRecipeButton"
                onClick={this.hideDetails}>Show Recipe</button>
            </div>
          </div>

        </div>
      )
    }
  }
}
