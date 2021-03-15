import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import api from '../../api/api'

import { Row, Col, Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'

import Logo from '../../assets/logo2.png'

import './styles.css'

export default function Logon() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const res = await api.post('user/session', { email, password })

            localStorage.setItem('name', res.data.user.name)
            localStorage.setItem('id', res.data.user.id)
            localStorage.setItem('token', res.data.token)

            if (res.data.user.role === 'emp') {
                history.push('/registered_time/list/unique')
            } else if (res.data.user.role === 'adm') {
                history.push('/dashboard')
            } else {
                alert('Authentication failure')
            }
        } catch (err) {
            alert('Authentication failure')
        }
    }

    return (
        <div className="Logon-container">
            <Row>
                <Col xs={24} sm={24} md={24} lg={12} className="back-col1" >
                    <div className="img1">
                        <img src={Logo} className="logo-img" alt="" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} className="back-col2" >
                    <div className="login-form">
                        {/* adiconar background com a imagem */}
                        <div className="form-container">
                            <div className="form-box">
                                {/* containar do form onde defino o back color */}
                                <div className="form-inputs">
                                    <Form onSubmitCapture={handleLogin}>
                                        <label>Login</label>
                                        <Input
                                            className="input-group"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                        <br /><br />
                                        <label>Senha</label>
                                        <Input.Password
                                            className="input-group"
                                            visibilityToggle={false}
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                        />
                                        <br /><br />
                                        <Button type="primary" htmlType="submit">Login</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}




