import React from "react";

import pessoas from "../../Data/pessoas";

export default props => {

  function getPeople() {
    return pessoas.map(p => {
      return <li key={p.id}>
          {p.id} - {p.name} - {p.age}
          </li>
    });
  }
  return(
  <div>
    <h2>Repetição</h2>
    <ul>{getPeople()}</ul>
  </div>
  )
};
