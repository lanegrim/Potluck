class App extends React.Component {

  state = {
    title: '',
    image: '',
    tags: '',
    ingredients: '',
    methods: '',
    duration: '',
    recipes: [],

  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/recipes', this.state).then((response) => {
      console.log(response)
      this.setState({
        recipes: response.data,
        title: '',
        image: '',
        tags: '',
        ingredients: '',
        methods: '',
        duration: '',
      })
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
        tags: '',
        ingredients: '',
        methods: '',
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

      </div>
    )

  }
}

ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
