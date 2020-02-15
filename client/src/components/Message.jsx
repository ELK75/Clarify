import React, {useState} from 'react';

import './Message.css';
const socket = io.connect('http://localhost:5000');

export default function Message(props) {
    return (
        <li className="m">{props.text}</li>
    )
}