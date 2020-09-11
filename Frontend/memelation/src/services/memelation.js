import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:5000"
})

export default class memelation {

  async cadastrar({autor,categoria,hashtags,imagem,maior}){
    const formdata = new FormData()
    formdata.append('autor',autor)
    formdata.append('categoria', categoria)
    formdata.append('hahstags',hashtags)
    formdata.append('maior',maior)
    formdata.append('imagem',imagem)
    const response =  await api.post(`/Meme`,formdata,{
       headers: { "content-type": "multipart/form-data" }
    })
    return response.data
  }

  async deletar(id){
    const response = await api.delete(`/Meme/${id}`)
    return response.data
  }

  async consultar(maior){
    const response =  await api.get(`/Meme?maior=${maior}`)
    return response.data
  }

  async adicionarcurtidas(id){
    const response =  await api.post(`/Meme/Curtida/${id}`)
    return response
  }

  buscarFoto(nome){
    const response = api.get(`/Meme/Foto/${nome}`)
    return response.data
  }

  async alterarComFoto(id,props){
    const formdata = new FormData()
    formdata.append('autor',props.autor)
    formdata.append('categoria', props.categoria)
    formdata.append('hashtags',props.hashtags)
    formdata.append('maior',props.maior)
    formdata.append('imagem',props.imagem)
    const response =  await api.put(`/Meme/AltFoto/${id}`,formdata,{
       headers: { "content-type": "multipart/form-data" }
    })
    return response.data
  }

  async alterar(id,props){
    const response = await api.put(`/Meme/${id}`,props)
    return response.data
  }
} 