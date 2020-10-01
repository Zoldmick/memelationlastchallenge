import React,{ useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Link } from 'react-router-dom'
import memelation from '../../services/memelation'
import "react-multi-carousel/lib/styles.css"
import Card from '../../components/card'
const api = new memelation()

export default function AdultMeme(){
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
    const adultMemeClick = async () => {
        try{
            const resp = await api.consultar(true)
            console.log(resp)
            setReq([...resp])
        }
        catch(e){
            toast.error(e.response.data.error)
        }
    }

    useEffect(() => {
        adultMemeClick()
    },[])    
    return(
        <div>
            <ToastContainer />
            <h1>Memes adultos</h1>
            <Carousel responsive={responsive}>
                {req.map(x =>                 
                    <Card 
                        imagem={x.imagem}
                        categoria={x.categoria}
                        autor={x.autor}
                        hashtags={x.hashtags}
                        alt={x}
                        curtidas={x.curtidas}
                        id={x.id}
                    />
                )}
            </Carousel>
            <Link to='/'>
                Voltar ao menu
            </Link>
        </div>
    )
}