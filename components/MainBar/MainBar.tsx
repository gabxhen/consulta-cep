import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import dataCep from '../ContentComplete';

const MainBarContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    h2 {
        width: 100%;
        font-size: 1.8rem;
        color: white;
        margin-bottom: 50px;
        margin-left: 30px;

        & > span {
            color: #141414;
            font-weight: 600;
        }
    }
`
type PropsCEP = {
    estado?: string
    cidade?: string;
    bairro?: string;
    rua?: string;
    ddd?: string;
}

export default function MainBar(props:PropsCEP){
    return (
        <MainBarContent>
            <h2>Esse CEP fica no estado de <span>{props.estado}.</span></h2>
            <h2>Na cidade do(a) <span>{props.cidade}.</span></h2>
            <h2>Especificamente no bairro do(a) <span>{props.bairro}.</span></h2>
            <h2>Pertence a <span>{props.rua}.</span></h2>
            <h2>O DDD do local é <span>{props.ddd}.</span></h2>
        </MainBarContent>
    )
}