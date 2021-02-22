import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Dashboard from '../../assets/vector1.png'
import Register from '../../assets/register.png'
import Exit from '../../assets/exit.png'
import api from '../../api/api'
import moment from 'moment'
import 'moment/locale/pt-br'
import './styles.css'


export default function ProfileADM() {
    const [administrators, setEmproyess] = useState([])
    const history = useHistory()
    const token = localStorage.getItem('token')

    useEffect(() => {
        api.get('/registered_time/list/all', { headers: { token: token } }).then(res => {
            setEmproyess(res.data)
        })
    })

    function logout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="profileADM-container">
            <header>

            </header>

            <nav>
                <ul>
                    <li>
                        <img src={Logo} width="55" height="55" alt="" />
                    </li>
                    <hr style={{ marginRight: 25 }} />
                    <li>
                        <Link to="/registered_time/list/all">
                            <img src={Dashboard} style={{ marginLeft: 7, color: '#A5A5A5' }} width="45" height="45" alt="" />
                            <h6 style={{ color: '#A5A5A5', marginTop: 10 }}>Dashboard</h6>
                        </Link>
                    </li>
                    <hr style={{ marginRight: 25 }} />
                    <li><img src={Register} style={{ marginLeft: 13 }} width="36" height="36" alt="" />
                        <br />   <h6 style={{ color: '#A5A5A5', marginTop: 10 }}>Meus Registros</h6>
                    </li>

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
                        {administrators.map(adm => (
                            <li key={adm.id}>
                                <article className="second">
                                    <div className="item4">
                                        <p>{adm.name} </p>
                                    </div>
                                    <div className="item5">
                                        <p>{moment(adm.time_registered).format('DD/MM/YY')}</p>
                                    </div>
                                    <div className="item6">
                                        <p>{moment(adm.time_registered).locale('pt-br').format('LT[h]')}</p>
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





