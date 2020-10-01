import React, { useState } from  'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
            return response
  
        }catch(e){
            toast.error(e.response.data.error)
        }
      }
  
      const deletarComentario = async (id)  => {
        try{
            const response = await apiComentario.deletarComentario(id);
            return response
  
        }catch(e){
          toast.error(e.response.data.error)
        }
      }
    return(
        <div>
            <ToastContainer/>
           <div>
                <input 
                    type="text" 
                    placeholder="Digite aqui sua opnião"
                    value={msg}
                    onChange={e => setMsg(e.target.value)}/>
                <button onClick={() => {
                        enviarComentario(id)
                        document.location.reload(true)
                    }}>
                    Enviar
                </button>
            </div>
            <div>
                {mais == false && comentarios.length > 3  &&
                     <div>
                        {comentarios.slice(0,3).map(x =>
                            <>
                                <p>{x.comentario}</p>
                                <button onClick={() => deletarComentario(x.id)}>
                                    Deletar
                                </button>
                            </>
                            )}
                            <button onClick={() => setMais(true)}>
                                ler mais
                            </button>
                     </div>
                }
                {mais == true || comentarios.length <= 3 &&
                    <div>
                        {comentarios.map(x => 
                            <>
                                <p>{x.comentario}</p>
                                <button onClick={() => {
                                    console.log(document.location.href)
                                    document.location.reload(true)
                                    deletarComentario(x.id)
                                }}>
                                    Deletar
                                </button>
                            </>)}
                    </div>
                }
            </div>
        </div>
    )
}