import React, { useState } from 'react';

export default props => {
    const [number, setNumber] = useState(Array(props.qtdeNumeros).fill(0));

    function sortear(array){
        const min = 1
        const max = 60
        const novosNumeros = parseInt(Math.random() * (max - min)) + min
        return array.includes(novosNumeros) ? gerar(array) : novosNumeros

    }

    function gerar() { 
        const novoArray = Array(props.qtdeNumeros)
        .fill(0)
        .reduce((acc, val) => {
            const novoNumero = sortear(acc)
            return [...acc, novoNumero] 
        },[]) 
            .sort((acc, b) => acc - b)
            setNumber(novoArray)
    }

            return(
            <>
            <h3>Numeros Sorteados</h3>
            <h4>{number.join(' ')}</h4>
            <button onClick={gerar}>Sortear</button>
            </>
            )
}