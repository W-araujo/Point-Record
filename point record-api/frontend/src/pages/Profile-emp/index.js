import React from 'react'

import './styles.css'


export default function ProfileEMP(props) {
    return (
        <div className="logon-container">
            <h1>Usuario logado EMP</h1>
            <h2>{props.name} </h2>
        </div>
    )
}





