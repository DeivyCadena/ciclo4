import React, { Component } from "react";

class EditarUsuario extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
                <h1>Editar Usuario</h1>
                <form>
                <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" />
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="apellido" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="pass" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
                
            </React.Fragment>
        );
    }
}

export default EditarUsuario;