import React,{ useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import memelation from '../../services/memelation'
import 'react-toastify/dist/ReactToastify.css'
const api = new memelation()

export default function Register(){
    const [autor,setAutor] = useState('')
    const [categoria,setCategoria] = useState('')
    const [hashtags,setHashtags] = useState('')
    const [maior,setMaior] = useState(false)
    const [imagem,setImagem] = useState()

    const salvarClick = async () => {
        try{
            const resp = await api.register({
                autor:autor,
                categoria:categoria,
                hashtags:hashtags,
                maior:maior,
                imagem:imagem
            })
            console.log(resp)
            toast.dark('Sucess')
        }
        catch(e){
            if(e.response.data.erro) toast.error(e.response.data.erro)
            else toast.error("Algo deu errado. Tente novamente")
        } 
    }

    return(
        <div>
            <ToastContainer />
            <h1>Cadastrar meme</h1>
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
                <input type='file' onChange={e => setImagem(e.target.files[0])}/>
            </div>
            <button onClick={salvarClick}>
                Salvar
            </button>
            <Link to='/'>Voltar ao menu</Link>
        </div>
    )
}
