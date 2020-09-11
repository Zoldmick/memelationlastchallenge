import React, { useState } from 'react'
import {MomWrapper, Caard, ImageCard, TextCard, Span, H2, CardStats, Stat, Value, Type, CardStatBorder, Sup } from './styled'
import { Link } from 'react-router-dom'
import apiMeme from '../../services/memelation'
import Comentario from '../../services/comentario'
const apiComentario = new Comentario()
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
    const comentarioClick = async () => {
        try{
          const req = {
            id_meme:id,
            comentario:comentario
          }
          console.log(req)
          const resp = await apiComentario.cadastrarComentario(req)
        }
        catch(e){
          console.log(e.response.data.erro)
        }
      }

    const deletarClick = async (id) => {
        try {
            const resp = await apiComentario.deletarComentario(id)
        }
        catch(e){
          console.log(e.response.data.erro)
            }
        }
    
    return (
        <MomWrapper>
            <Caard>
                <ImageCard>
                    <img src={imagem} alt='' heigth='40'/>
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
            <div>
              <input type="text" 
                placeholder="Comentar" 
                onChange={e => setComentario(e.target.value)} 
                value={comentario}/>
              <button onClick={comentarioClick}>Enviar</button>
            </div>
            {console.log(alt.comentarios)}
            <div>
                {alt.comentarios.map(x => 
                    <div>
                        <span>{x.comentario}</span>
                        <button onClick={() => deletarClick(x.id)}>Deletar</button>
                    </div>   
                )}
            </div>
        </MomWrapper>
    );
}


