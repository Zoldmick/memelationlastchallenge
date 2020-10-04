import React,{ useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useHistory } from 'react-router-dom'
import { Input, Text, Checkbox, Button } from './styled'
import memelation from '../../services/memelation'
import 'react-toastify/dist/ReactToastify.css'
const api = new memelation()

export default function Change(props){

    if(props.location.state == undefined ){
        window.location.replace("http://localhost:3000/")
    }

    const his = useHistory()
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
            }
            else {
                const resp = await api.alterarComFoto(id,req)
            }
            his.goBack()
            toast('Sucess')
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
            <h1 align="center">ALTERAR MEME</h1>
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
            <Button type="submit" className="btn btn-primary" onClick={changeClick} value="Salvar"/> <wbr />
            <Button type="reset" className="btn btn-secondary" value="Limpar" onClick={Limpar}/>
            <br />
            <Link to='/'>Voltar ao menu</Link>
        </div>
    )
}