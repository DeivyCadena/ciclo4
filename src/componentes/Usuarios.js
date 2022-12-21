import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Usuarios extends Component {

    state = {
        usuarios: []
    }

    componentWillMount() {
        this.getUsuarios();
    }

    getUsuarios = () => {
        axios.get("http://localhost:3000/api/usuarios")
            .then(res => {
                console.log("Usuarios");
                console.log(res.data.doc);
                this.setState({
                    usuarios: res.data.doc
                })
                console.log(this.state.usuarios);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Usuarios</h1>
                <Link to="/agregarUsuario" className="btn btn-success">Agregar Usuario</Link>
                <table className="table mt-5 table-primary table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Contraseña</th>
                            <th>Imagen</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usuarios.map((usuario) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{usuario._id}</td>
                                            <td>{usuario.name}</td>
                                            <td>{usuario.surname}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.password}</td>
                                            <td>{usuario.image}</td>
                                            <td>{usuario.role}</td>
                                            <td>
                                                <Link to={"/editarUsuario/"+usuario._id} className="btn btn-success">
                                                    Editar
                                                </Link>

                                                <button className="btn btn-danger ms-3">Eliminar</button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Usuarios;