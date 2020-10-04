import React from 'react'
import {PageDefault, InfoWrapper, Infos, Span} from './styled'

function Footer(){
    return(
        <PageDefault>
            <InfoWrapper>
                <Infos>
                    <Span>Quem somos?</Span>
                </Infos>
                <Infos>
                    <Span>Outros Projetos</Span>
                    <Span>Lista Negra</Span>
                    <Span>ListaFofa</Span>
                    <Span>Memelation</Span>
                </Infos>
                <Infos>
                    <Span>Contato</Span>
                    <Span>@FAQ</Span>
                    <Span>Email</Span>
                    <Span>WhatsApp</Span>
                </Infos>
            </InfoWrapper>
        </PageDefault>
    );
}

export default Footer;