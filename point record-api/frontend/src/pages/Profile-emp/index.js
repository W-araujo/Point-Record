import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useHistory, Redirect } from 'react-router-dom'

import api from '../../api/api'

import Logo from '../../assets/logo.png'
import Dashboard from '../../assets/vector1.png'
import Register from '../../assets/register.png'
import Exit from '../../assets/exit.png'


import './styles.css'


export default function ProfileEMP(props) {


    const [employees, setEmproyess] = useState([])

    const history = useHistory()

    const name = localStorage.getItem('name')
    const token = localStorage.getItem('token')

    

    function logout() {
        localStorage.clear();
        history.push('/');
    }


    useEffect(() => {
        api.get('/registered_time/get_list', { headers: { token: token } }).then(res => {
            setEmproyess(res.data);
        })
    });


    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);




    return (
        <div className="profileEMP-container">
            <header>
                <Button color="success" style={{ fontWeight: 'bold', marginLeft: 925 }} onClick={toggle}>{buttonLabel}Registrar</Button>
                <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                    <ModalHeader style={{ color: 'black' }} toggle={toggle}>Novo Registro</ModalHeader>
                    <ModalBody style={{ color: 'black', textAlign: 'center' }}>
                        <p style={{ color: 'black', fontSize: 15, marginRight: 200 }}>Colaborador</p>
                        <h4 style={{ marginRight: 209, marginBottom: 30 }}>{name}</h4>
                        <label style={{ marginRight: 255 }} htmlFor="data-time">Data/Hora</label>
                        <br />
                        <input className="form-control" style={{ textAlign: 'center', marginLeft: 64 }} type="datetime-local" name="" id="data-time" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={toggle}>Salvar</Button>{' '}
                        <Button outline color="success" onClick={toggle}>Cancelar</Button>{' '}
                    </ModalFooter>
                </Modal>
            </header>
            <nav>
                <ul>
                    <li>
                        <img src={Logo} width="55" height="55" alt="" />
                    </li>
                    <hr style={{ marginRight: 25 }} />
                    <li>
                        <img src={Dashboard} style={{ marginLeft: 7, color: '#A5A5A5' }} width="45" height="45" alt="" />
                        <h6 style={{ color: '#A5A5A5', marginTop: 10 }}>Dashboard</h6>
                    </li>
                    <hr style={{ marginRight: 25 }} />
                    <Link to="/registered_time/get_list">
                        <li><img src={Register} style={{ marginLeft: 13 }} width="36" height="36" alt="" />
                            <br />   <h6 style={{ color: '#A5A5A5', marginTop: 10 }}>Meus Registros</h6>
                        </li>
                    </Link>
                    <hr style={{ marginRight: 25 }} />
                    <Link onClick={logout} to="/">

                        <li style={{ color: '#A5A5A5' }}>
                            <img src={Exit} style={{ marginLeft: 13, marginTop: 320 }} width="34" height="34" alt="" />
                        </li>
                    </Link>
                </ul>
            </nav>
            <main>
                <article className="first">
                    <div className="item1">
                        <h3>Colaborador</h3>
                    </div>
                    <div className="item2">
                        <h3>Data</h3>
                    </div>
                    <div className="item3">
                        <h3>Hora</h3>
                    </div>
                </article>
                <form>
                    <ul>
                        {employees.map(employee => (
                            <li key={employee.id}>
                                <article className="second">
                                    <div className="item4">
                                        <p>{employee.name} </p>
                                    </div>
                                    <div className="item5">
                                        <p>{employee.time_registered}</p>
                                    </div>
                                    <div className="item6">
                                        <p>09:05</p>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </form>
            </main>
        </div>
    )
}





