import React from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import memelation from '../../services/memelation'
const api = new memelation()

export default function Delete(props){
    const his = useHistory()
    const deleteClick = async () => {
        try{
            await api.delete(props.location.state.id)
            his.goBack()
        }
        catch(e){
            toast.error(e.response.data.erro)
        }
    }
    const deleteFakeClick = () => his.goBack()

    return(
        <div>
            <ToastContainer />
            <h1>Pagina de excluir</h1>
            <h2>Deseja realmente excluir?</h2>
            <button onClick={deleteClick}>SIM</button>
            <button onClick={deleteFakeClick}>NÃO</button>
        </div>
    )
}