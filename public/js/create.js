class Create extends React.Component {
  render = () => {
    return (
      <div>
      <br />
      <h2>ADD RECIPE</h2>
      <br />

      <form className="addRecipe" onSubmit={this.props.handleSubmit}>

        <div className="row">
          <div className="col-4">
            <label className="form-label" htmlFor="title">Title</label>
            <input className="form-control" type="text" id="title"
              onChange={this.props.handleChange} value={this.props.title} />
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="duration">Duration</label>
            <input className="form-control" type="text" id="duration"
              onChange={this.props.handleChange} value={this.props.duration} />
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="type">Type of Recipe</label>
            <select className="form-select" type="text" id="type"
              onChange={this.props.handleChange} value={this.props.type}>
              <option defaultValue>Choose Recipe Type...</option>
              <option value="Main">Main</option>
              <option value="Side">Side</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label" htmlFor="image">Image</label>
            <input className="form-control" type="text" id="image"
              onChange={this.props.handleChange} value={this.props.image} />
          </div>
        </div>



        <div className="row">
          <div className="col-8">
            <label className="form-label" htmlFor="ingredients">Ingredients</label>
            {this.props.ingredients.map((value, index) => {
              let ingredientId = `ingredient-${index}`
              return (
                <input
                  key={index}
                  className="form-control ingredients"
                  type="text"
                  data-id={index}
                  id={ingredientId}
                  onChange={this.props.handleChange}
                  defaultValue={this.props.ingredients[index]} />
              )
            })}
          </div>
        </div>

        <br />
        <div className="row">
          <div>
            <button onClick={this.props.addIngredient} className="btn btn-info">Add Ingredient</button>
            <button onClick={this.props.removeIngredient} className="btn btn-warning">Remove Ingredient</button>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-8">
            <label className="form-label" htmlFor="methods">Methods</label>
            {this.props.methods.map((value, index) => {
              let methodId = `method-${index}`
              return (
                <input
                  key={index}
                  className="form-control methods"
                  type="text"
                  data-id={index}
                  id={methodId}
                  onChange={this.props.handleChange}
                  defaultValue={this.props.methods[index]} />
              )
            })}
          </div>
        </div>

        <br />
        <div className="row">
          <div>
            <button onClick={this.props.addMethod} className="btn btn-info">Add Step</button>
            <button onClick={this.props.removeMethod} className="btn btn-warning">Remove Step</button>
          </div>
        </div>

        <br />
        <div className="row">
          <div className="col">
            <input className="btn btn-primary" type="submit" value="Add Recipe" />
          </div>
        </div>

      </form>
      </div>
    )

  }
}
