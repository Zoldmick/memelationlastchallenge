import React from 'react'
import { Link } from  'react-router-dom'
import Logo from '../../assets/Memelation.png'
import {PageDefault, NmEmpresa, Logotipo, H1} from './styled'

function Header() {
    return (
        <PageDefault>
            <NmEmpresa>
                <H1>Memelation Last Challenge</H1>
            </NmEmpresa>
            <Logotipo>
                <img  src = {Logo} alt="Logotipo Flagstaff Car" height='30' />
            </Logotipo>
        </PageDefault>
    );
}

export default Header;