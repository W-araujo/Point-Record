import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import api from '../../api/api'

import './styles.css'

import Logo from '../../assets/logo.png'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Logon() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const res = await api.post('user/session', { email, password });

            if (res.data.user.role === 'emp') {
                history.push('/registered_time/get_list');
            } else if (res.data.user.role === 'adm') {
                history.push('/registered_time/list_all');
            } else {
                alert('Authentication failure');
            }

            console.log(res.data.token);

        } catch (err) {
            alert('Authentication failure');
        }
    }

    return (
        <div className="logon-container">
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <div className="row">
                            <div className="col row justify-content-center">
                                <img class="img-fluid" src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col row justify-content-center">
                                <h1>Register</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col row justify-content-center">
                                <p>ACCESS CONTROL</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="img-area row justify-content-center">
                            <div className="box-area row justify-content-center">
                                <Form onSubmit={handleLogin}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Login</Label>
                                        <Input
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            name="email"
                                            id="exampleEmail"
                                            placeholder="Inform your email"
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Senha</Label>
                                        <Input
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            name="password"
                                            id="examplePassword"
                                            placeholder="Inform your password" />
                                    </FormGroup>
                                    <Button type="submit">Login</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




