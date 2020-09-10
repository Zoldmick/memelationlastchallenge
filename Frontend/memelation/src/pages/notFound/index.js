import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return(
        <div>
            <h1>PAGINA NÃO EXISTE</h1>
            <Link to='/'>Gostaria de voltar a pagina inicial?</Link>
        </div>
    )
}