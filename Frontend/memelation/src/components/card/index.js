import React, { useState } from 'react'
import {MomWrapper, Caard, ImageCard, TextCard, Span, H2, CardStats, Stat, Value, Type, CardStatBorder, Sup } from './styled'
import { Link } from 'react-router-dom'
import apiMeme from '../../services/memelation'
const meme = new apiMeme()


export default function Card({imagem,categoria,autor,hashtags,alt,id,curtidas}){
    function Random(){
        const result = Math.round(Math.random() *10)
        return result;
    }
    const [curtir,setCurtir] = useState(curtidas)
    const [comentario,setComentario] = useState('') 
    const read = Random()
    const views = Random() * 100
    const comments = Random() * 10  
    
    const curtirClick = async () => {
        try{
            const resp = await meme.adicionarcurtidas(id)
            setCurtir(curtir + 1)
        }catch(e){
            console.log(e.response)
        }
    }
    return (
        <MomWrapper>
            <Caard>
                <ImageCard>
                    {console.log(`Log: ${meme.buscarFoto("user.png")}`)}
                    <img src={meme.buscarFoto(imagem)} alt=''/>
                </ImageCard> 
                <TextCard>
                    <Span>{categoria}</Span>
                    <H2>{autor}</H2>
                    <Span>{hashtags} </Span>
                    <span>
                        <Link to={{
                            pathname:`/change/${id}`,
                            state:alt }}>
                            ALterar
                        </Link>
                    </span>
                    <span>
                    {console.log(alt)}
                        <Link to={{
                            pathname:`/delete/${id}`,
                            state:alt }}>Excluir</Link>
                    </span>
                    <div>
                        <button onClick={curtirClick}>Curtir</button>
                        <span>{curtir}</span>
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


