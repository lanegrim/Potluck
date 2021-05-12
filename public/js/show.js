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
                <div>
                    <h3>{this.props.recipe.title}</h3>
                    <h4>Recipe Type: <b>{this.props.recipe.type}</b></h4>
                    <h4>Preperation Time: <b>{this.props.recipe.duration}</b></h4>
                    <img src={this.props.recipe.image} alt={this.props.recipe.title} />

                    <button className="btn btn-outline-primary" onClick={this.hideDetails}>Show Recipe</button>

                    <h4>Ingredients</h4>
                    <ul>
                        {this.props.recipe.ingredients.map((ingredient) => {
                            return (
                                <li key={ingredient}>
                                    {ingredient}
                                </li>
                            )
                        })}
                    </ul>

                    <h4>Method</h4>
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
            )
        } else {
            return (
                <div>
                    <h3>{this.props.recipe.title}</h3>
                    <h4>Recipe Type: <b>{this.props.recipe.type}</b></h4>
                    <h4>Preperation Time: <b>{this.props.recipe.duration}</b></h4>
                    <img src={this.props.recipe.image} alt={this.props.recipe.title} />

                    <button className="btn btn-outline-primary" onClick={this.hideDetails}>Show Recipe</button>
                </div>
            )
        }
    }
}