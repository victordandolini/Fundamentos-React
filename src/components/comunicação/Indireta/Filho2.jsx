import React from "react";

export default (props) => {
    
  function acao() {
    props.onClicar(Math.random(), "Fim");
  }
  return (
    <div>
      <button onClick={acao}>Alterar</button>
    </div>
  );
};
