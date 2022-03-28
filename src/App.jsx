import React from "react";
import "./App.css";
import Primeiro from "./components/Basicos/Primeiro";
import ComParametros from "./components/Basicos/ComParametros";
import ComFilhos from "./components/Basicos/ComFilhos";
import Card from "./components/layout/Card";
import Loop from "./components/Basicos/Loop";
import Condicional from "./components/Basicos/Condicional";
import CondicionalComIf from "./components/Basicos/CondicionalComIf";
import Pai from "./components/comunicação/Direta/Pai.jsx";
import Pai2 from "./components/comunicação/Indireta/Pai2";
import Input from "./components/Formularios/Input";
import Contador from "./components/Contador/Contador";
import Mega from "./components/Mega/Mega";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
    <Card titulo="#01 -Primeiro Componente" color="#ac8d49">
      <Primeiro />
    </Card>
    <Card titulo="#02 - Componente com Propriedades"color="#58ce74">
      <ComParametros titulo="Title" subtitulo="Sub-Title" />
    </Card>
    <Card titulo="#03 - Componente com Children"color="#451a3e">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Pedro</li>
          <li>Katarina</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#04 - Componente com Loop(Map)"color="#0b8185">
      <Loop/>
    </Card>
    <Card titulo="#05 - Componente com Condicional"color="#f4b036">
      <Condicional numero={10}/>
    </Card>
    <Card titulo="#06 - Componente com If componentizado"color="#fc694d">
      <CondicionalComIf numero={11}/>
    </Card>
    <Card titulo="#07 - Comunicação Direta entre Componentes"color="#fcd0cf">
      <Pai sobrenome="Ramos"/>
    </Card>
    <Card titulo="#08 - Comunicação Indireta entre Componentes usando UseState"color="#df5c7e">
      <Pai2/>
    </Card>
    <Card titulo="#09 - Input com UseState e onChange"color="#c7b299">
      <Input/>
    </Card>
    <Card titulo="#10 - Contador"color="#8c0005">
      <Contador passo={1} valor={0}/>
    </Card>
    <Card titulo="#11 - MEGA SENA" color="#00a9d4">
      <Mega qtdeNumeros={6} />
    </Card>
    </div>
  </div>
);
