import React,{ useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import memelation from '../../services/memelation'
import { Link } from 'react-router-dom'
import Card from '../../components/card'
import "react-multi-carousel/lib/styles.css"
import Comentario from '../../components/comentario'
const apiMeme = new memelation()

export default function HomePage(){
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
       try { 
          const resp = await apiMeme.consultar(false)
          console.log(resp)
          setReq(resp)
       }
       catch(e){
          toast.error(e.response.data.error)
       }
    }

    useEffect(() => {
        consultClick()
    },[])    

    return(
        <div>
            <ToastContainer />
            <h1 align="center"> MEMES </h1>
            <Link to='/register'>
              <h5>CADASTRAR MEME</h5>
            </Link>
            <Carousel responsive={responsive}>
                {req.map(x =>    
                <div className='container-sm'>
                    <Card 
                      key={x.id}
                      imagem={x.imagem}
                      categoria={x.categoria}
                      autor={x.autor}
                      hashtags={x.hashtags}
                      alt={x}
                      curtidas={x.curtidas}
                      id={x.id}
                    />
                    <Comentario 
                      id={x.id}
                      comentarios={x.comentarios}
                      />
                </div>
                )}
            </Carousel>
            <br />
            <Link to='/Meme' onClick={() => window.confirm("Deseja entra mesmo nessa pegina, pois ela pode conter um conteudo improprio para sua")}>
              Pagina de memes adultos
            </Link>
        </div>
    )
}

