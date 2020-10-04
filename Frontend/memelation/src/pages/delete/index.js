import React from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button, H4 } from './styled'
import memelation from '../../services/memelation'
const api = new memelation()

export default function Delete(props){

    if(props.location.state == undefined ){
        window.location.replace("http://localhost:3000/")
    }
    const his = useHistory()
    const deleteClick = async () => {
        try{
            await api.deletar(props.location.state.id)
            his.goBack()
        }
        catch(e){
            toast.error(e.response.data.erro)
        }
    }
    return(
        <div>
            <ToastContainer />
            <H4>Deseja exclurair a obra de  {props.location.state.autor} da lista de memes?</H4>
            
            <Button type="submit" className="btn btn-primary" value="Sim" onClick={deleteClick} />
            <Button type="submit" className="btn btn-primary" value="Não" onClick={() => his.goBack()} />
        </div>
    )
}