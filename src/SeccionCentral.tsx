import FormularioLogIn from "./FormularioLogIn";

import "./SeccionCentral.css"
import Titulo from "./Titulo";
const SeccionCentral = (props : SeccionCentralProps)=>{
    return <div>
        <Titulo texto={props.texto} color={"#f9d953"}/>
        <div className="centrar">
            <img className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Universidad_de_Lima_logo.png" />
        </div>
                <FormularioLogIn/>
            
          </div>

}


interface SeccionCentralProps {
    texto : string
}
export default SeccionCentral;