import React,{ useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
    const his = useHistory()  
    const adultMemeClick = async () => {
        try{
            const con = await api.consult()
            setReq([...con])

        }
        catch(e){
            toast.error(e.response.data.erro)
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
                {req.filter(x => x.maior).map(x =>                 
                    <Card imagem={api.getPhoto(x.imagem)}
                    categoria={x.categoria}
                    autor={x.autor}
                    hashtags={x.hashtags}
                    alt={x}/>
                )}
            </Carousel>
            <button onClick={() => his.goBack()}>
                Voltar ao menu
            </button>
        </div>
    )
}