import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Excluir</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto'
}

TechItem.propType = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;