import React,{ useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import memelation from '../../services/memelation'
import { Link } from 'react-router-dom'
import Card from '../../components/card'
import "react-multi-carousel/lib/styles.css"
import Comentario from '../../services/comentario'
const apiMeme = new memelation()
const apiComentario = new Comentario()

export default function HomePage(){

    const [comentario,setComentario] = useState('') 
    const [req,setReq] = useState([])
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }

    const consultClick = async () => {
       try{
          const resp = await apiMeme.consultar(false)
          setReq(...resp)
       }
       catch(e){
          toast.error(e.response.data.erro)
       }
    }
    const comentarioClick = async (id) => {
      try{
        const resp = await apiComentario.cadastrarComentario({
          id:id,
          comentario:comentario
        })
      }
      catch(e){
        toast.error(e.response.data.erro)
      }
    }


    useEffect(() => {
        consultClick()
    },[])    

    return(
        <div>
            <ToastContainer />
            <h1>Consultar carroussel</h1>
            <Link to='/register'>Cadastro</Link>
            <Carousel responsive={responsive}>
                {req.map(x =>  
                <>    
                    <Card key={x.id} 
                      imagem={apiMeme.buscarFoto(x.imagem)}
                      categoria={x.categoria}
                      autor={x.autor}
                      hashtags={x.hashtags}
                      alt={x}
                      curtidas={x.curtidas}
                      curtir={() => await apiMeme.adicionarcurtidas(x.id)}/>
                    <div>
                      <input type="text" placeholder="Comentar" 
                      onChange={e => setComentario(e.target.value)} 
                      value={comentario}/>
                      <button onClick={e => comentarioClick(x.id)}>Enviar</button>
                    </div>
                    <div>
                      {x.comentarios.map(y => 
                        <>
                          <div>{y.comentario}</div>
                          <button onClick={apiComentario.deletarComentario(y.id)}>Deletar</button>
                        </>
                        )}
                    </div>
                </>
                )}
            </Carousel>
            <Link to='/Meme' onClick={() => alert('Certeza que quer ir a pagina dos memes adultos?')}>Pagina de memes adultos</Link>
        </div>
    )
}

