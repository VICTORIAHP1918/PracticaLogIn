const FormularioLogIn = ()=>{
    return <form>
              <div>
                <label className="form-label"> Usuario: </label>
                <input className="form-control" type="text" />
              </div>

              <div>
                 <label className="form-label"> Contraseña: </label>
                 <input className="form-control" type="password" />
              </div>

              <button className="btn btn-success w-100 mt-2" type='button'> Ingresar</button>
            </form>

}
export default FormularioLogIn;