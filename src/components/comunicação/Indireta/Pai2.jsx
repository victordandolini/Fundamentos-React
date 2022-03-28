import React, {useState} from 'react';
import Filho from '../Indireta/Filho2';

export default (props) => {
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState("Valor")

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        console.log("Ação!!!!")
        setTexto(texto)
    }

    return(
            <>
            <h4>{texto}:{num }</h4>
            <Filho onClicar={quandoClicar}></Filho>
            </>
        );
};