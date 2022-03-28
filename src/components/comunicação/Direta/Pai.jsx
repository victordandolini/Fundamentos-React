import React from 'react';
import Filho from '../Direta/Filho';

export default props =>
            <>
            <Filho {...props}><strong>Katarina</strong></Filho>
            <Filho sobrenome={props.sobrenome}><strong>Aquiles</strong></Filho>
            <Filho sobrenome="Dandolini"><strong>Darius</strong></Filho>
            </>