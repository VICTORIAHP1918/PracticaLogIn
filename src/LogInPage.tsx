import SeccionCentral from "./SeccionCentral";

const LogIn = (username:string, password:string) =>{
  if(username == "victoria" && password=="victoria"){
    //login correcto
    console.log("Login exitoso")
  }
  else{
    //login incorrecto
    console.log("Login error")
  }
}
const LogInPage = ()=>{
    return <div>
      <div className='row'>
        <div className='col'>
          &nbsp;
        </div>

         <div className='col'>
          <SeccionCentral texto="LogIn"
          onLogin= {LogIn}/>
        </div>

         <div className='col'>
          &nbsp;
        </div>
      </div>
    </div>


}

export default LogInPage;