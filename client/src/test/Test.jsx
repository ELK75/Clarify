import React from 'react';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

export default function test() {
    return ( 
        <div>
            <div> hello</div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.dev.js"></script>
        </div>
     );
}
 