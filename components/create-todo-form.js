import { PureComponent } from 'react'

let id = 0

export default class CreateTodoForm extends PureComponent {
  state = {
    name: '',
  }
  handleInputChange = e => {
    this.setState({
      name: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    const name = this.state.name.trim()
    if (!name) return
    const { onSubmit } = this.props
    if (onSubmit) {
      onSubmit({
        id: ++id,
        name: name,
      })
    }
    this.setState({
      name: '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>
          <input onChange={this.handleInputChange} value={this.state.name} />{' '}
          <button>Save</button>
        </span>
      </form>
    )
  }
}
