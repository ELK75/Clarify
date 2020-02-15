import React, {useState} from 'react';
import uuid from 'uuid/v1';

import Message from './components/Message';

//make front end connection
const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');

// const gamePin = getRandomInt(1000000);
const SocketFrontEnd = (props) => {
    const[type, setType]= useState('');
    const [messages, setMessages] = useState([]);

    //connecting to specific room
    var room = props.pin;
    socket.on('connect', function(){
        console.log("trying to join: " + room)
        socket.emit('room' , room);
    });

    
    //handling the new message
    const handleNewMessage = (e) => {
        e.preventDefault();
        console.log('new message emmitting');
        if(type){
            console.log('sending out ' + type);
            socket.emit('chat', {type: type})
        }
    }

    //receiving message from socket backend
    socket.on('chat', data => {
        console.log('reached');
        setMessages([...messages, <Message text={data.type} id={uuid()}/>]);
    })
    

    return ( 
        <div>
             <form onSubmit={handleNewMessage}>
                <div id= "chat">
                    <input id = "type" type = "text"  value={type}
                    onChange={(e)=> setType(e.target.value)}/>
                    <button type= "submit">send</button>
                </div>
                
            </form>
            
            <div>
                {/* {output} */}
                {messages}
            </div>
        </div>
       
     );
}

export default SocketFrontEnd;
 