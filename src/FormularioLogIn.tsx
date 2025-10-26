import { useState } from "react";

const FormularioLogIn = (props : FormularioLogInProps)=>{

  const[username, setUserName] = useState<string>("")
  const[password, setPassword] = useState<string> ("")

  const handleUserNameOnChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setUserName(e.currentTarget.value)
  }

  const handlePasswordOnChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setPassword(e.currentTarget.value)
  }
    return <form>
              <div>
                <label className="form-label"> Usuario: </label>
                <input className="form-control" 
                type="text" 
                value={username}
                onChange={handleUserNameOnChange}/>
              </div>

              <div>
                 <label className="form-label"> Contraseña: </label>
                 <input className="form-control" 
                 type="password" 
                 value={password}
                 onChange={handlePasswordOnChange}/>
              </div>

              <button className="btn btn-success w-100 mt-2" 
              type='button'
              onClick={()=>{props.onLogin(username,password)} }
              > Ingresar</button>
            </form>

}

interface FormularioLogInProps{
  onLogin : (username:string, password:string) => void
}
export default FormularioLogIn;


