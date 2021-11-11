import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import './ChatScreen.css';

function ChatScreen(){
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Angela',
            image: 'https://www.infobae.com/new-resizer/e0kV3D49KqI8XKQEXH6mqMi9jRg=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/ZRINRIO4PRDIDMUYAKDYG2UBAM.jpg',
            message: 'hi bb'
        },
        {
            name: 'Angela',
            image: 'https://www.infobae.com/new-resizer/e0kV3D49KqI8XKQEXH6mqMi9jRg=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/ZRINRIO4PRDIDMUYAKDYG2UBAM.jpg',
            message: 'how it going!'
        },
        {
            message: 'Hi angela!'
        }

    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('')
    }


    return(
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCH WITH ANGELA ON 10/10/21</p>
            {messages.map((message) => (

                message.name ? (
                <div className="chatScreen_messages">
                    <Avatar
                    className= "chatScreen_image"
                    alt={message.name}
                    src={message.image} 
                    />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen_messages">
                        <p className="chatScreen_textuser">{message.message}</p>
                    </div>
                )
            ))}

                <form className="chatScreen_input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen_inputfiled"
                    placeholder="Type a messages.."
                    typ="text" 
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen_inputButton">SEND</button>
                </form>

        </div>
    );
}


export default ChatScreen