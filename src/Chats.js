import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
             name="Juliane"
             message="Hey r u you?"
             timestamp="20 seconds ago"
             profilePic="https://s2.glbimg.com/1IUHbQkdDAcHW07LxzNWlLehreU=/e.glbimg.com/og/ed/f/original/2020/04/15/alisonbrie_81989104_2940131689352868_4897220337134269201_n.jpg"
            />
             <Chat 
             name="Amanda"
             message="I never go there"
             timestamp="30 seconds ago"
             profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnNyUnLMUpvr_u1Tw4R7rLPQQuhmlH5yXXew&usqp=CAU"
            />  
             <Chat 
             name="Larissa"
             message="Are you rich?"
             timestamp="10 seconds ago"
             profilePic="https://www.thesun.co.uk/wp-content/uploads/2020/01/NINTCHDBPICT000552166920.jpg"
            />  
             <Chat 
             name="Fernanda"
             message="I loved your hair"
             timestamp="55 seconds ago"
             profilePic="https://resizing.flixster.com/TgV6M4rkJztYbWUkg1q6LtpvSDk=/2000x3000/v1.bjs3NDYzMTA7ajsxODUwMzsxMjAwOzIwMDA7MzAwMA"
            />          
    </div>
    );    
}

export default Chats;
