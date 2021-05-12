class App extends React.Component {

  state = {
    title: '',
    image: '',
    type: '',
    ingredients: [''],
    methods: [],
    duration: '',
    recipes: [],

  }

  handleChange = (event) => {
    if(event.target.className === 'ingredients') {
      let ingredients = this.state.ingredients
      ingredients[event.target.dataset.id] = event.target.value
      this.setState({ingredients}, () => console.log(this.state.ingredients))
    } else {
      this.setState({ [event.target.id]: event.target.value})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/recipes', this.state).then((response) => {
      // console.log(response)
      this.setState({
        recipes: response.data,
        title: '',
        image: '',
        type: '',
        ingredients: [''],
        methods: [],
        duration: '',
      })
    })
  }

  addIngredient = (event) => {
    // console.log('added')
    this.setState((prevState) => ({
      // console.log(prevState)
      ingredients:[...prevState.ingredients]

    }, console.log(this.state.ingredients)))
  }

  addMethod = (event) => {
    this.setState(() => {

    })
  }

  updateRecipe = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios.put('/recipes/' + id, this.state).then((response) => {
      this.setState({
        recipes: response.data,
        title: '',
        image: '',
        type: '',
        ingredients: [''],
        methods: [],
        duration: '',
      })
    })
  }

  deleteRecipe = (event) => {
    axios.delete('/recipes/' + event.target.value).then((response) => {
      this.setState({
        recipes: response.data
      })
    })
  }

  componentDidMount = () => {
    axios.get('/recipes').then((response) => {
      this.setState({
        recipes: response.data
      })
    })
  }

  render = () => {
    return (

      <div>


        <br/>
        <h2>ADD RECIPE</h2>
        <br/>

        <form className="addRecipe" onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-6">
              <label className="form-label" htmlFor="title">Title</label>
              <input className="form-control" type="text" id="title"
              onChange={this.handleChange} value={this.state.title} />
            </div>
            <div className="col-6">
              <label className="form-label" htmlFor="duration">Duration</label>
              <input className="form-control" type="text" id="duration"
              onChange={this.handleChange} value={this.state.duration} />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="type">Type of Recipe</label>
              <select className="form-select" type="text" id="type"
              onChange={this.handleChange} value={this.state.type}>
                <option defaultValue>Choose Recipe Type...</option>
                <option value="main">Main</option>
                <option value="side">Side</option>
                <option value="dessert">Dessert</option>
                <option value="snack">Snack</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="image">Image</label>
              <input className="form-control" type="text" id="image"
              onChange={this.handleChange} value={this.state.image} />
            </div>
          </div>



          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="ingredients">Ingredients</label>
              {this.state.ingredients.map((value, index) => {
                let ingredientId = `ingredient-${index}`
                return (
                  <input
                  className="form-control ingredients"
                  type="text"
                  id={index}
                  onChange={this.handleChange}
                  value={this.state.ingredients[index]} />
                )
              })}
            </div>
          </div>

          <br/>
          <div className="row">
            <div className="col">
              <button onClick={this.addIngredient} className="btn btn-info">Add Ingredient</button>
            </div>
          </div>
          <br/>

          <div className="row">
            <div className="col">
              <label className="form-label" htmlFor="methods">Methods</label>
              <input className="form-control" type="text" id="methods"
              onChange={this.handleChange} value={this.state.methods} />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col">
              <button className="btn btn-info">Add Step</button>
            </div>
          </div>
          <br/>

          <br/>
          <div className="row">
            <div className="col">
              <input className="btn btn-primary" type="submit" value="Add Recipe" />
            </div>
          </div>

        </form>


        <br/>

        <h2>ALL RECIPES</h2>

        <ul>
          {this.state.recipes.map((recipe) => {
            return (

              <li key={recipe._id}>

                <h3>{recipe.title}</h3>
                <h4>{recipe.duration}</h4>
                <img src={recipe.image} alt={recipe.title} />
                <h4>{recipe.tags}</h4>

                <h4>Ingredients</h4>
                <ul>
                  {recipe.ingredients.map((ingredient) => {
                    return (
                      <li>
                        {ingredient}
                      </li>
                    )
                  })}
                </ul>

                <h4>Method</h4>
                <ol>
                  {recipe.methods.map((method) => {
                    return (
                      <li>
                        {method}
                      </li>
                    )
                  })}
                </ol>

                <details>

                  <summary>Edit your recipe</summary>

                  <form className="editRecipe" id={recipe._id} onSubmit={this.updateRecipe}>

                    <div className="row">
                      <div className="col-6">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input className="form-control" type="text" id="title"
                        onChange={this.handleChange} />
                      </div>
                      <div className="col-6">
                        <label className="form-label" htmlFor="duration">Duration</label>
                        <input className="form-control" type="text" id="duration"
                        onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label className="form-label" htmlFor="tags">Tags</label>
                        <input className="form-control" type="text" id="tags"
                        onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label className="form-label" htmlFor="image">Image</label>
                        <input className="form-control" type="text" id="image"
                        onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label className="form-label" htmlFor="ingredients">Ingredients</label>
                        <input className="form-control" type="text" id="ingredients"
                        onChange={this.handleChange} />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <label className="form-label" htmlFor="methods">Methods</label>
                        <input className="form-control" type="text" id="methods"
                        onChange={this.handleChange} />
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col">
                        <input className="btn btn-success" type="submit" value="Update Recipe" />
                      </div>
                    </div>

                  </form>

                </details>


                <br/>
                <button className="btn btn-danger" onClick={this.deleteRecipe} value={recipe._id}>
                  Delete Recipe
                </button>


              </li>
            )
          })}
        </ul>

      </div>
    )

  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
