import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../api/api'
import moment from 'moment'
import 'moment/locale/pt-br'

import Logo from '../../assets/logo.png'
import DashboardIcon from '../../assets/vector1.png'
import RegisterIcon from '../../assets/myRegisters.svg'
import ExitIcon from '../../assets/logout.svg'
import imgListGreen from '../../assets/ColorService.svg'

import './styles.css'

import { Row, Col, Divider } from 'antd';


export default function Dashboard() {
    const [employees, setEmployees] = useState([])
    const history = useHistory()
    const token = localStorage.getItem('token')

    useEffect(() => {
        api.get('/registered_time/list/all', { headers: { token: token } }).then(res => {
            setEmployees(res.data)
        })
    })

    function logout() {
        localStorage.clear()
        history.push('/')
    }
    return (
        <div className="dashboard-container">
            <Row>
                <Col xs={24} sm={24} md={24} lg={2} className="col-menu">
                    <Row className="row-menu">
                        <img src={Logo} style={{ width: 60, height: 60, marginTop: 20 }} alt="Logo" />
                        <Divider style={{}} />
                        <Link to='/dashboard' style={{ textAlign: 'center' }}>
                            <img src={DashboardIcon} style={{ width: 26, height: 26, marginBottom: 4 }} alt="Dashboard icon" />
                            <p className="dashboard-text">Dashboard</p>
                        </Link>
                        <Divider style={{ margin: '' }} />
                        <Link to='/registered_time/list/unique' style={{ textAlign: 'center' }}>
                            <img src={RegisterIcon} style={{ width: 35, height: 35, marginBottom: 4 }} alt="Register icon" />
                            <p className="register-text">Meus Registros</p>
                        </Link>
                        <Divider style={{ margin: '' }} />
                    </Row>
                    <Row className="row-logout" style={{ height: '10vh' }}>
                        <Link onClick={logout} to='/' >
                            <img src={ExitIcon} alt="" />
                        </Link>
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={22} style={{ background: '#E5E5E5' }}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} className="col-header">


                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={22} className="col-section">
                            <p>Colaborador</p>
                            <p>Data</p>
                            <p>Hora</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} className="col-content">
                            <div className="form-list">
                                <form>
                                    <ul>
                                        {employees.map(employee => (
                                            <li key={employee.id}>
                                                <p className="name"><img src={imgListGreen} className="form-list-img" alt="" /> {employee.name}</p>
                                                <p className="id">{employee.id}</p>
                                                <p className="date">{moment(employee.time_registered).format('DD/MM/YY')}</p>
                                                <p className="time">{moment(employee.time_registered).locale('pt-br').format('LT[h]')}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </form>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
    );
}