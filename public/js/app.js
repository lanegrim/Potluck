class App extends React.Component {

  state = {
    title: '',
    image: '',
    type: '',
    ingredients: ['', '', ''],
    methods: ['', '', ''],
    duration: '',
    owner: '',
    ownerPicture: '',
    filterType: '',
    shownRecipes: [],
    recipes: [],
    userInput: {
      username: '',
      password: '',
      picture: '',
    },
    currentUser: {},
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

  handleUser = (event) => {
    let userInput = { ...this.state.userInput }
    userInput[event.target.id] = event.target.value
    this.setState({ userInput })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()
    axios.post('/recipes', this.state).then((response) => {
      // console.log(response)
      this.setState({
        recipes: response.data.reverse(),
        shownRecipes: response.data,
        title: '',
        image: '',
        type: '',
        ingredients: ['', '', ''],
        methods: ['', '', ''],
        duration: '',
        owner: this.state.currentUser.username,
        ownerPicture: this.state.currentUser.picture,
      })
    })
  }

  newUser = (event) => {
    event.preventDefault()
    console.log('New user', this.state.userInput)
    axios.post('/users', this.state.userInput).then((response) => {
      this.setState({
        userInput: {
          username: '',
          password: '',
          picture: '',
        },
      })
    })
  }

  newSession = (event) => {
    event.preventDefault()
    axios.post('/sessions', this.state.userInput).then((response) => {
      this.setState({
        currentUser: response.data,
        owner: response.data.username,
        ownerPicture: response.data.picture,
        userInput: {
          username: '',
          password: '',
          picture: '',
        },
      })
    })
  }

  deleteSession = (event) => {
    event.preventDefault()
    axios.delete('/sessions').then((response) => {
      this.setState({
        currentUser: {},
        owner: '',
        ownerPicture: '',
        shownRecipes: this.state.recipes,
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
        recipes: response.data.reverse(),
        shownRecipes: response.data,
        title: '',
        image: '',
        type: '',
        ingredients: ['', '', ''],
        methods: ['', '', ''],
        duration: '',
        owner: this.state.currentUser.username,
        ownerPicture: this.state.currentUser.picture,
      })
    })
  }

  deleteRecipe = (event) => {
    axios.delete('/recipes/' + event.target.value).then((response) => {
      this.setState({
        recipes: response.data.reverse(),
        shownRecipes: response.data,
      })
    })
  }

  filterRecipesByType = (event) => {
    event.preventDefault()
    let filteredRecipes = []
    for (let i = 0; i < this.state.recipes.length; i++) {
      if (this.state.recipes[i].type === this.state.filterType) {
        filteredRecipes.push(this.state.recipes[i]);
      };
    };
      if (filteredRecipes.length > 0) {
        this.setState({
          shownRecipes: filteredRecipes,
          filterType: '',
        });
      };
  };

  filterRecipesByOwner = () => {
    let filteredRecipes = []
    for (let i = 0; i < this.state.recipes.length; i++) {
      if (this.state.recipes[i].owner === this.state.currentUser.username) {
        filteredRecipes.push(this.state.recipes[i]);
      };
    };
    this.setState({
      shownRecipes: filteredRecipes,
    });
  };

  componentDidMount = () => {
    axios.get('/recipes').then((response) => {
      this.setState({
        recipes: response.data.reverse(),
        shownRecipes: response.data
      })
    })
  }

  render = () => {
    if (Object.keys(this.state.currentUser).length === 0) {
      return (
        <div>
          <h1>Potluck</h1>
          <Users
            userInput={this.state.userInput}
            handleUser={this.handleUser}
            newUser={this.newUser}
            newSession={this.newSession}
          ></Users>
        </div>
      )
    } else {
      return (

        <div>

          <nav>
            <h1>Potluck</h1>
            <h2>Hello, {this.state.currentUser.username}</h2>
            <button className="btn btn-danger" onClick={this.deleteSession} type="submit">Log Out</button>
          </nav>

          <header>

          <form onSubmit={this.filterRecipesByType}>
            <select className="form-select" type="text" id="filterType"
            onChange={this.handleChange} value={this.state.filterType}>
              <option defaultValue>Filter by Recipe Type</option>
              <option value="Main">Main</option>
              <option value="Side">Side</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </select>
            <button type="submit">Filter</button>
          </form>

          <button onClick={this.filterRecipesByOwner}>Show My Recipes</button>

          <button onClick={this.componentDidMount}>Show All Recipes</button>

          </header>

          <button onClick={this.showForm} className="btn btn-primary">Add Recipe</button>
          {this.state.showForm ?
            <Create
              currentUser={this.state.currentUser}
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
            {this.state.shownRecipes.map((recipe) => {
              return (

                <li key={recipe._id}>

                  <Show
                    currentUser={this.state.currentUser}
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

          <button onClick={() => {
            window.scroll(
              {
                top: 0,
                behavior: "smooth"
              }
            )
          }}>Scroll to Top</button>

        </div>
      )
    }
  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
