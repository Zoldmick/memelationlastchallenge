import React,{ useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import memelation from '../../services/memelation'
import 'react-toastify/dist/ReactToastify.css'
const api = new memelation()

export default function Change(props){
    const [id] = useState(props.location.state.id)
    const [autor,setAutor] = useState(props.location.state.autor)
    const [categoria,setCategoria] = useState(props.location.state.categoria)
    const [hashtags,setHashtags] = useState(props.location.state.hashtags)
    const [maior,setMaior] = useState(props.location.state.maior)
    const [imagem,setImagem] = useState(props.location.state.imagem)

    const changeClick = async () => {
        try{

            const req = {
                autor:autor,
                categoria:categoria,
                hashtags:hashtags,
                maior:maior,
                imagem:imagem
            }
            
            console.log(req)

            if(typeof imagem === "string"){
               const resp =  await api.alterar(id,req)
               return resp
            }
            else {
                const resp = await api.alterarComFoto(id,req)
                return resp
            }
            toast('Sucess')
        }
        catch(e){
            if(e.response.data.erro) toast.error(e.response.data.erro)
            else toast.error("Algo deu errado. Tente novamente")
        } 
    }

    return(
        <div>
            <ToastContainer />
            <h1>Alterar meme</h1>
            <div>
                <label>Autor</label>
                <input type='text' value={autor}
                onChange={e => setAutor(e.target.value)}/>
            </div>
            <div>
                <label>Categoria</label>
                <input type='text' value={categoria}
                onChange={e => setCategoria(e.target.value)}/>
            </div>
            <div>
                <label>Hashtags</label>
                <input type='text' value={hashtags}
                onChange={e => setHashtags(e.target.value)}/>
            </div>
            <div>
                <label>Maior</label>
                <input type='radio' value={maior}
                onChange={e => setMaior(e.target.checked)}/>
            </div>
            <div>
                <label>Imagem</label>
                <input type='file' 
                onChange={e => setImagem(e.target.files[0])}/>
            </div>
            <button onClick={changeClick}>
                Salvar
            </button>
            <Link to='/'>Voltar ao menu</Link>
        </div>
    )
}