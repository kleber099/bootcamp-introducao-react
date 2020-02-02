import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Excluir</button>
    </li>
  )
}

export default TechItem;