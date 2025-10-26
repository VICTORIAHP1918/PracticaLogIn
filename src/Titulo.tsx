import { useState } from "react"
import "./SeccionCentral.css"

const Titulo = (props: TituloProps) =>{
   
    //variable de estado
    const [tamanoFuente, setTamanoFuente] = useState <number> (3)

    const h1OnClick= () =>{
        console.log("hizo click")
        setTamanoFuente(tamanoFuente + 1)
    }

    return <h1 style={
        {
            textAlign:"center",
            backgroundColor : props.color != undefined? props.color : " ",
            fontSize : `${tamanoFuente}em`

        }}
        onClick={h1OnClick }
    >
        {
            props.texto
        }

    </h1> 
    
}

//definir tipo de dato
interface TituloProps{
    texto  : string
    color? : string
}

export default Titulo