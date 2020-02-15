import React, {useState} from 'react';

import Message from './components/Message';

//make front end connection
const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000');

const SocketFrontEnd = () => {
    const[type, setType]= useState('');
    const[output, setOutput] = useState('');
    const [messages, setMessages] = useState([]);
   
    const handleNewMessage = (e) => {
        e.preventDefault();
        console.log('new message emmitting');
        if(type){
            console.log(type);
            socket.emit('chat', {type: type})
        }
    }

    socket.on('chat', data => {
        console.log(data);
        setMessages([...messages, <Message text={data.type}/>]);
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
 