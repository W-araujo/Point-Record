import React from 'react'
import './styles.css'

import Logo from '../../assets/logo.png'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Logon() {
    return (
        <div className="logon-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 row justify-content-center mt-2">
                        <img className="img-fluid" src={Logo} alt="" />
                      
                        <div className="col-lg-12 row justify-content-center ">
                            <h1>Register</h1>
                        </div>
                        <div className="col-lg-12 row justify-content-center">
                            <p>ACCESS CONTROL</p>
                        </div>
                    </div>
                    <div className="col-lg-3 " >
                        <div className=" form-area row justify-content-center mt-5">
                            <Form className="col-lg-10" style={{ margin: 'auto' }}>
                                <FormGroup>
                                    <Label for="exampleEmail">Login</Label>
                                    <Input type="email" name="email" id="exampleEmail" style={{ backgroundColor: '#f2f2f2' }} placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Senha</Label>
                                    <Input type="password" name="password" id="examplePassword" style={{ backgroundColor: '#f2f2f2' }} placeholder="password placeholder" />
                                </FormGroup>
                                <Button>Login</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



