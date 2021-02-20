import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api/api'

import Logo from '../../assets/logo.png'
import Dashboard from '../../assets/vector1.png'
import Register from '../../assets/register.png'

import './styles.css'


export default function ProfileADM() {

    const [employees, setEmproyess] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJyb2RAZ21haWwuY29tIiwicm9sZSI6ImFkbSIsImlhdCI6MTYxMzc5NTgxMiwiZXhwIjoxNjEzNzk5NDEyfQ.ULMIhStKLADXKmBPQlM03PalRrXcGNRMhMoEcbqWO1s"

    const ids = employees.map(emp => {
        return emp.id
    })

    useEffect(() => {
        api.get('/registered_time/list_all', { headers: { token: token } }).then(res => {
            setEmproyess(res.data);
        })
    }, [ids]);

    return (
        <div className="profileADM-container">
            <header>

            </header>

            <nav>
                <ul>
                    <li><img src={Logo} width="55" height="55" alt="" /></li>
                    <hr style={{ marginRight: 25 }} />
                    <a href="/">
                        <li><img src={Dashboard} style={{ marginLeft: 7, color: '#A5A5A5' }} width="45" height="45" alt="" />
                            <h6 style={{ color: '#A5A5A5', marginTop:10 }}>Dashboard</h6>
                        </li>
                    </a>
                    <hr style={{ marginRight: 25 }} />
                    <a href="/" >
                        <li><img src={Register} style={{ marginLeft: 13, }} width="36" height="36" alt="" />
                            <br />   <h6 style={{ color: '#A5A5A5', marginTop:10 }}>Meus Registros</h6>
                        </li>
                    </a>
                </ul>
            </nav>

            <main>
                <article className="first">
                    <div class="item1">
                        <h3>Colaborador</h3>
                    </div>
                    <div class="item2">
                        <h3>Data</h3>
                    </div>
                    <div class="item3">
                        <h3>Hora</h3>
                    </div>
                </article>

                <form>
                    <ul>
                        {employees.map(employee => (
                            <li key={employee.id}>
                                <article class="second">
                                    <div class="item4">
                                        <p>{employee.name} </p>
                                    </div>
                                    <div class="item5">
                                        <p>{employee.time_registered}</p>
                                    </div>
                                    <div class="item6">
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





