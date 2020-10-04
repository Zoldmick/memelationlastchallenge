import React from 'react'
import { Link } from 'react-router-dom'
import { Load, H1 } from './styled'
import { ClockLoader, MoonLoader, PulseLoader } from 'react-spinners'

export default function NotFound(){
    return(
        <div>
            <H1 color="red">Erro 404 </H1>
            <h4> {window.location.toString()} não existe nesse contexto</h4>
            <Load >
                <MoonLoader size="300" className="load"/>
            </Load>
            <Link to='/'>Voltar a pagina inicial</Link>
        </div>
    )
}