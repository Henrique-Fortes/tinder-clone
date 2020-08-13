import React, {useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Juliane",
            image: "https://s2.glbimg.com/1IUHbQkdDAcHW07LxzNWlLehreU=/e.glbimg.com/og/ed/f/original/2020/04/15/alisonbrie_81989104_2940131689352868_4897220337134269201_n.jpg",
            message: "How are you?", 
        },
        {
            name: "Juliane",
            image: "https://s2.glbimg.com/1IUHbQkdDAcHW07LxzNWlLehreU=/e.glbimg.com/og/ed/f/original/2020/04/15/alisonbrie_81989104_2940131689352868_4897220337134269201_n.jpg",
            message: "You are pretty", 
        },
        {            
            message: "How are you doing today?", 
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    };    

    return (
        <div className="chatScreen">           
            <p className="chatScreen__timestamp">YOU MATCHED WITH JULIANE ON 12/08/20</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}                    
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) : (
                <div className="chatScreen__message">                   
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )
            )}            
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form>            
        </div>
    );
}

export default ChatScreen;
