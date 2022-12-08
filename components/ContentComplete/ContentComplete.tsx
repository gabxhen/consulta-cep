import React, { ButtonHTMLAttributes, DetailedHTMLProps, FormEventHandler, MouseEventHandler, useState } from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';
import { Console } from 'console';
import MainBar from '../MainBar';

const ContentMain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`


const SideBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 35%;
    height: 100vh;
    background: #141414;
    border-radius: 0 35px 35px 0;

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    & > form > input {
        width: 70%;
        height: 30px;
        background: #FFFFFF;
        border: 1.4px solid #878b8b;
        border-radius: 7px;
        outline: none;
        padding-left: 3%;
        margin-bottom: 5%;
    }

    
    & > #button {
        font-family: 'Alexandria', sans-serif;
        width: 70%;
        height: 30px;
        background: #FF782C;
        color: white;
        font-weight: 300;
        border: none;
        border-radius: 7px;
        outline: none;
        padding-left: 3%;
        margin-bottom: 25%;
    }

    h1 {
        margin: 0;
        padding: 0;
        margin-bottom: 5%;
        color: white;
        font-size: 1.8rem;
        font-weight: 500;
    }
`


export default function Content(props:ButtonHTMLAttributes<HTMLButtonElement>){
    const [cep, setCep] = useState<string>("");
    const [estado, setEstado] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [bairro, setBairro] = useState<string>("");
    const [rua, setRua] = useState<string>("");
    const [ddd, setDdd] = useState<string>("");
    
    const [validation, setValidation] = useState<boolean>(false);

    const validarCep = async () => {
        if(cep.length > 8 || cep.length < 8){
            alert("CEP Inválido")
        } else {
            fetch(`https://viacep.com.br/ws/${cep}/json`)
                .then(res => res.json()).then(data =>{
                    setEstado(data.uf);
                    setCidade(data.localidade);
                    setBairro(data.bairro)
                    setRua(data.logradouro);
                    setDdd(data.ddd);
                    setValidation(true);
                });
        }
    }

    
    return (
        <ContentMain>
            <SideBarContainer>
                <h1>Consultar CEP</h1>
                <form>
                    <input type="text" placeholder='Ex: 54420370' onChange={(e) => setCep(e.target.value)} value={cep}/>
                </form>
                <button id="button" onClick={validarCep}>CONSULTAR</button>
            </SideBarContainer>

            {
                validation ? <MainBar estado={estado} cidade={cidade} bairro={bairro} rua={rua} ddd={ddd}/> : <></>
            }


        </ContentMain>
    )
}
