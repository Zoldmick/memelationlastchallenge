import axios from 'axios'

const api = axios.create({
    baseURL : "http://localhost:5000"
})

export default class comentario {
    
    async cadastrarComentario(props){
        const response =  await api.post(`/Comentario`,props)
        return response.data
      }
    
      async deletarComentario(id){
        const response =  await api.delete(`/Comentario/${id}`)
        return response.data
      }
}