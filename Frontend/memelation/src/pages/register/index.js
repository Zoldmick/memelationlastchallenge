import React,{ useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import memelation from '../../services/memelation'
import { Input, Text, Checkbox, Button } from './styled'
import 'react-toastify/dist/ReactToastify.css'
const api = new memelation()

export default function Register(){
    const [autor,setAutor] = useState('')
    const [categoria,setCategoria] = useState('')
    const [hashtags,setHashtags] = useState('#')
    const [maior,setMaior] = useState(false)
    const [imagem,setImagem] = useState()

    const salvarClick = async () => {
        try{
            const resp = await api.cadastrar({
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

    const Limpar = () => {
        setAutor('')
        setCategoria('')
        setImagem()
        setMaior(false)
        setHashtags('#')
    }

    return(
        <div>
            <ToastContainer />
            <h1 align="center">CADASTRAR MEME</h1>
            <form method="get">
                <div>
                    <Text>Autor</Text>
                    <Input type='text' value={autor}
                    onChange={e => setAutor(e.target.value)}/>
                </div>
                <div>
                    <Text>Categoria</Text>
                    <Input type='text' value={categoria}
                    onChange={e => setCategoria(e.target.value)}/>
                </div>
                <div>
                    <Text>Hashtags</Text>
                    <Input type='text' value={hashtags}
                    onChange={e => setHashtags(e.target.value)}/>
                </div>
                <div>
                    <Text>Maior</Text>
                    <Checkbox type='checkbox' value={maior}
                    onChange={e => setMaior(e.target.checked)}/>
                </div>
                <div>
                    <Text>Imagem</Text>
                    <input type='file' className="btn" accept="image/*" onChange={e => setImagem(e.target.files[0])}/>
                </div>
            </form>
            <br />
            <Button type="submit" className="btn btn-primary" onClick={salvarClick} value="Salvar"/> <wbr />
            <Button type="reset" className="btn btn-secondary" value="Limpar" onClick={Limpar}/>
            <br />
            <Link to='/'>Voltar ao menu</Link>
        </div>
    )
}
