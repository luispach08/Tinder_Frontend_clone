import React from "react";
import './Chats.css'
import Chat from '../Chat/Chat'

function Chats(){
    
    return(
    <div>
        <Chat
        name="Angela"
        message="hi bb"
        timestamp= "1 min ago"
        profilePic="https://www.infobae.com/new-resizer/e0kV3D49KqI8XKQEXH6mqMi9jRg=/1200x628/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/ZRINRIO4PRDIDMUYAKDYG2UBAM.jpg"
        />
        <Chat
        name="Ashley"
        message="ola!"
        timestamp= "10 min ago"
        profilePic="https://www.minutousa.com/u/fotografias/m/2020/8/19/f500x333-1051_24854_174.jpg"
        />
        <Chat
        name="Sara"
        message="Hey you how are u"
        timestamp= "35 min ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woman_1.jpg/768px-Woman_1.jpg"
        />
        <Chat
         name="ellen"
         message="whats up"
         timestamp= "1 day ago"
         profilePic="https://ca-times.brightspotcdn.com/dims4/default/828d49e/2147483647/strip/true/crop/3000x1964+0+0/resize/840x550!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4f%2F43%2F0842b6ca22401c8378892505c09a%2Fbd47b2be28334a8f9c57383590949afa"
        />     
        <Chat
        name="Tammy"
        message="how are u"
        timestamp= "2 days ago"
        profilePic="https://www.famousbirthdays.com/headshots/tammy-parra-6.jpg"
        />  
    </div>
    );
}

export default Chats;