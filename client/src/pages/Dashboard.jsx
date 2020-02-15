import React, {useState} from 'react'

import SocketFrontEnd from '../SocketFrontEnd'

import Header from '../components/Header';

import Chat from '../components/Chat';


export default function Dashboard(props) {
    const [pin, setPin] = useState('');
    const [hostingRoom, setHostingRoom] = useState(false);
    const [joiningRoom, setJoiningRoom] = useState(false);
    const [type, setType] = useState('');

    const [beginChat, setBeginChat] = useState(false);


    const handleNewPin = (isHosting) => {
        setBeginChat(true);
        setHostingRoom(isHosting);
        if (isHosting) {
            setPin("Mental Health Professional");
        } else {
            setPin("Looking for Help");
        }
        // setPin(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
        // console.log(pin);
        //route to chat
    }
 
    let page;

    if (!hostingRoom && !joiningRoom && !beginChat) {
        page = (
            <div className="">
                <Header />
                <div className="row h-100">
                    <div className="col-6 text-center">
                        {/* <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} /> */}
                        <button type="button" class="btn btn-primary btn-xl" onClick={() => handleNewPin(false)}><p className="text-xxl">Find a Mental Health Professional</p></button>
                    </div>
                    <div className="col-6 text-center">
                        <button type="button" class="btn btn-danger btn-xl" onClick={() => handleNewPin(true)}><p className="text-xxl">Talk to Someone in Need</p></button>
                    </div>
                    {/* <SocketFrontEnd pin={pin} /> */}
                </div>
            </div>
        )
    }

    console.log(hostingRoom);

    if (hostingRoom && !beginChat) {
        page = (
            <div className="text-center">
                <p className="big-ass-text">{pin}</p>
                <button type="button" class="btn btn-primary btn-big-bb" onClick={() => setBeginChat(true)}><p className="text-xxl">Start Game</p></button>
            </div>
        )
    }

    if (beginChat) {
        page = <Chat pin={pin}/>
    }

    if(joiningRoom) {
        page = (
            <div>
                <form className="row">
                    <div className="col-10" ><input id="message" type="text" placeholder="Message" value={type} onChange={(e) => setType(e.target.value)} /></div>
                    <div className="col-2"><button id="send">Send</button></div>
                </form>   
            </div>
        )
    }


    return page
}