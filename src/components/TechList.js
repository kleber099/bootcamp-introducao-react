import React, { Component } from 'react';

import TechItem from './TechItem';

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
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
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