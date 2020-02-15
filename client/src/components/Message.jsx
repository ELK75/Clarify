import React, {useState} from 'react';

import './Message.css';
<<<<<<< HEAD
=======
//const socket = io.connect('http://localhost:5000');
>>>>>>> ced8e831ecd20c15338cfe9ce543098ee7007d05

export default function Message(props) {
    return (
        <li className="m">{props.text}</li>
    )
}