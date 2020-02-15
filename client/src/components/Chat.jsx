import React, {useState} from 'react'

import uuid from 'uuid/v1';
import Message from './Message';

import './Chat.css';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');

export default function Chat(props) {

    const [type, setType] = useState('');
    const [messages, setMessages] = useState([]);

    //connecting to specific room
    // var room = 'test';
    // socket.on('connect', function () {
    //     console.log("trying to join: " + room)
    //     socket.emit('room', room);
    // });


    //handling the new message
    const handleNewMessage = (e) => {
        e.preventDefault();
        console.log('new message emmitting');
        if (type) {
            console.log('sending out ' + type);
            socket.emit('chat', { type: type })
        }
    }

    //receiving message from socket backend
    socket.on('chat', data => {
        console.log('reached');
        setMessages([...messages, <Message text={data.type} id={uuid()} />]);
    })




    return (
        <div id="mario-chat w-75 vh-100">
            <div className="text-center mt-3">
                <h2>{props.pin}</h2> 
            </div>
            <div id="chat-window">
                <div id="output overflow-auto"></div>
                <div id="feedback"></div>
            </div>
            <div className = "textWindow">
                {messages}
            </div>
            <form className="row" onSubmit = {handleNewMessage}>
                <div className="col-10" ><input id="message" type="text" placeholder="Message" value = {type} onChange={(e) => setType(e.target.value)}/></div>
                <div className="col-2"><button id="send">Send</button></div>
            </form>            
        </div>
    )
}