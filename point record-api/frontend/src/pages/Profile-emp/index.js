import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import api from '../../api/api'
import Logo from '../../assets/logo.png'
import Dashboard from '../../assets/vector1.png'
import Register from '../../assets/register.png'
import Exit from '../../assets/exit.png'
import moment from 'moment'
import 'moment/locale/pt-br'
import './styles.css'


export default function ProfileEMP(props) {
    const [employees, setEmproyess] = useState([])
    const [time_registered, setTime_registered] = useState('')
    const [modal, setModal] = useState(false)

    const history = useHistory()

    const name = localStorage.getItem('name')
    const token = localStorage.getItem('token')

    useEffect(() => {
        api.get('/registered_time/list/unique', { headers: { token: token } }).then(res => {
            setEmproyess(res.data)
        })
    })

    async function handleTime_registered(e) {
        e.preventDefault()

        const verifyDate = moment(time_registered, true)
        if (verifyDate.isValid()) {
            const data = {
                time_registered
            }
            try {
                await api.post('/registered_time/register', data, { headers: { token: token } })
                history.push('/registered_time/list/unique')
            } catch (error) {
                alert('Invalid token')
            }
        } else {
            alert('Invalid Date')
        }
    }

    const {
        buttonLabel,
        className
    } = props
    const toggle = () => setModal(!modal)

    function logout() {
        localStorage.clear()
        history.push('/')
    }

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
                        <Form onSubmit={handleTime_registered}>
                            <input
                                className="form-control"
                                style={{ textAlign: 'center', marginLeft: 64 }}
                                type="datetime-local"
                                name=""
                                id="data-time"
                                value={time_registered}
                                onChange={e => setTime_registered(e.target.value)}
                            />
                            <ModalFooter style={{ marginTop: 20 }}>
                                <Button type="submit" color="success" onClick={toggle}>Salvar</Button>
                                <Button outline color="success" onClick={toggle}>Cancelar</Button>{' '}
                            </ModalFooter>
                        </Form>
                    </ModalBody>
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
                    <Link to="/registered_time/list/unique">
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
                                        <p>{moment(employee.time_registered).format('DD/MM/YY')}</p>
                                    </div>
                                    <div className="item6">
                                        <p>{moment(employee.time_registered).locale('pt-br').format('LT[h]')}</p>
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





