import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newText: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = (e) => {
    this.setState({ newText: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      techs: [ ...this.state.techs, this.state.newText ],
      newText: '',
    })
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">Excluir</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newText}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;