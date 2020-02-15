import React from 'react';

import './Message.css';

export default function Message(props) {
    return (
        <li className="m">{props.text}</li>
    )
}