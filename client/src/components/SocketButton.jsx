import React, {useState} from 'react';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:4000');

const SocketButton = () =>{
    
    const[check, setCheck] = useState('');
    const[btn, setBtn] = useState('unpressed');

    const handlePress = (e) => {
        e.preventDefault();
        setCheck('pressed');
        socket.emit('chat', {check: check});
    }

    socket.on('chat', data =>{
        console.log(data);
        setBtn(data.check);
    })

    return(
        <div>
            <form onSubmit={handlePress}>
                <div>
                    <button type="submit">press</button>
                </div>
                <div>
                    {btn}
                </div>
            </form>
        </div>
    );
}

export default SocketButton;
