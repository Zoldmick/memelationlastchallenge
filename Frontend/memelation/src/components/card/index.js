import React, { useState } from 'react'
import {MomWrapper,Page, Caard, Curtidas, Img, ImageCard, TextCard, Span, H2, CardStats, Stat, Value, Type, CardStatBorder, Sup } from './styled'
import { Link } from 'react-router-dom'
import Like from '../../assets/buttonLike.png'
import apiMeme from '../../services/memelation'
const meme = new apiMeme()


export default function Card(props){
    function Random(){
        const result = Math.round(Math.random() *10)
        return result;
    }
    const [curtir,setCurtir] = useState(props.curtidas)
    const [comentario,setComentario] = useState('') 
    const [read,setRead] = useState(Random())
    const [views,setViews] = useState(Random() * 100)
    const [comments,setComments] = useState(Random() * 10)  
    
    const curtirClick = async () => {
        try{
            const resp = await meme.adicionarcurtidas(props.id)
            setCurtir(curtir + 1)
        }catch(e){
            console.log(e.response)
        }
    }
    return (
        <MomWrapper>
            <Caard>
                <ImageCard src={meme.buscarFoto(props.imagem)} alt=''/>
                <TextCard>
                    <Span>{props.categoria}</Span>
                    <H2>{props.autor}</H2>
                    <Span>{props.hashtags} </Span>
                    <Page>
                        <Link to={{
                            pathname:`/change/${props.id}`,
                            state:props.alt }}>
                             Alterar
                        </Link>
                    </Page>
                    <Page>
                    {console.log(props.alt)}
                        <Link  to={{
                            pathname:`/delete/${props.id}`,
                            state:props.alt }}>
                                Excluir
                        </Link>
                    </Page>
                    <div>
                        <Img src={Like} alt='' onClick={curtirClick} />
                        <Curtidas>{curtir}</Curtidas>
                    </div>
                </TextCard>
                <CardStats>
                    <Stat>
                        <Value>{read}<Sup>m</Sup></Value>
                        <Type>Read</Type>
                    </Stat>
                    <CardStatBorder>
                        <Value>{views}</Value>
                        <Type>Views</Type>
                    </CardStatBorder>
                    <Stat>
                        <Value>{comments}</Value>
                        <Type>Comments</Type>
                    </Stat>
                </CardStats>
            </Caard>
        </MomWrapper>
    );
}


