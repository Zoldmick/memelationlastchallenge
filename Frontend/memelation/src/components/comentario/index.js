import React, { useState } from  'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Container, Comment, Button, Text } from './styled'
import comentario from '../../services/comentario'
const apiComentario = new comentario();

export default function Comentario({id, comentarios}){
    const [msg,setMsg] = useState('')
    const [mais,setMais] = useState(false)

    const enviarComentario = async (id) => {
        try{
            const req = {
              id_meme:id,
              comentario:msg
            }
            console.log(req)
            const response = await apiComentario.cadastrarComentario(req)
            document.location.reload(true)
            return response
  
        }catch(e){
            toast.error(e.response.data.error)
        }
      }
  
      const deletarComentario = async (id)  => {
        try{
            console.log(id)
            const response = await apiComentario.deletarComentario(id);
            document.location.reload(true)
            return response
  
        }catch(e){
          toast.error(e.response.data.error)
        }
      }
    return(
        <div>
            <ToastContainer/>
           <div>
                <Comment 
                    type="text" 
                    placeholder="Digite aqui sua opnião"
                    size="25"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}/>
                <Button type="submit" title="Enviar Comentario" value="Enviar" onClick={() => enviarComentario(id) }/>
            </div>
            <div>
                {mais == false   &&
                     <div>
                        {comentarios.slice(0,3).map(x =>
                            <Container>
                                <Text>{x.comentario}</Text>
                                <button className="btn btn-secondary" onClick={() => deletarComentario(x.id)}>
                                    Deletar
                                </button>
                            </Container>
                            )}{comentarios.length > 3 && 
                                <button title="Ler mais" className="btn btn-primary" onClick={() => setMais(true)}>
                                    Ler mais
                                </button>
                            }
                            
                     </div>
                }
                {console.log(comentarios.length)}
                {mais == true  &&
                    <div>
                        {comentarios.map(x => 
                            <Container>
                                <Text>{x.comentario}</Text>
                                <button className="btn btn-secondary" onClick={() => deletarComentario(x.id)}>
                                    Deletar
                                </button>
                            </Container>)}
                    </div>
                }
            </div>
        </div>
    )
}