class App extends React.Component {

  state = {
    title: '',
    image: '',
    type: '',
    ingredients: ['', '', ''],
    methods: ['', '', ''],
    duration: '',
    recipes: [],
    showForm: false,
  }

  handleChange = (event) => {
    if (event.target.className.includes('ingredients')) {
      let ingredients = [...this.state.ingredients]
      ingredients[event.target.dataset.id] = event.target.value
      this.setState({ ingredients })
    } else if (event.target.className.includes('methods')) {
      let methods = [...this.state.methods]
      methods[event.target.dataset.id] = event.target.value
      this.setState({ methods })
    } else {
      this.setState({ [event.target.id]: event.target.value })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    axios.post('/recipes', this.state).then((response) => {
      // console.log(response)
      this.setState({
        recipes: response.data,
        title: '',
        image: '',
        type: '',
        ingredients: ['', '', ''],
        methods: ['', '', ''],
        duration: '',
      })
    })
  }

  addIngredient = (event) => {
    event.preventDefault()
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, '']
    }))
  }

  removeIngredient = (event) => {
    event.preventDefault()
    let reducedIngredients = this.state.ingredients
    reducedIngredients.pop()
    this.setState({
      ingredients: reducedIngredients
    })
  }

  addMethod = (event) => {
    event.preventDefault()
    this.setState((prevState) => ({
      methods: [...prevState.methods, '']
    }))
  }

  removeMethod = (event) => {
    event.preventDefault()
    let reducedMethods = this.state.methods
    reducedMethods.pop()
    this.setState({
      methods: reducedMethods
    })
  }

  showForm = (event) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  updateRecipe = (event) => {
    event.preventDefault()
    event.target.reset()
    const id = event.target.id
    axios.put('/recipes/' + id, this.state).then((response) => {
      this.setState({
        recipes: response.data,
        title: '',
        image: '',
        type: '',
        ingredients: ['', '', ''],
        methods: ['', '', ''],
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

        <button onClick={this.showForm} className="btn btn-primary">Add Recipe</button>
        {this.state.showForm ?
          <Create
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            title={this.state.title}
            duration={this.state.duration}
            type={this.state.type}
            image={this.state.image}
            ingredients={this.state.ingredients}
            addIngredient={this.addIngredient}
            removeIngredient={this.removeIngredient}
            methods={this.state.methods}
            addMethod={this.addMethod}
            removeMethod={this.removeMethod}
          ></Create>
          : null}

        <h2>ALL RECIPES</h2>

        <ul>
          {this.state.recipes.map((recipe) => {
            return (

              <li key={recipe._id}>

                <Show
                  recipe={recipe}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  ingredients={this.state.ingredients}
                  updateRecipe={this.updateRecipe}
                  addIngredient={this.addIngredient}
                  removeIngredient={this.removeIngredient}
                  methods={this.state.methods}
                  addMethod={this.addMethod}
                  removeMethod={this.removeMethod}
                  deleteRecipe={this.deleteRecipe}
                  title={this.state.title}
                  duration={this.state.duration}
                  type={this.state.type}
                  image={this.state.image}
                ></Show>

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
