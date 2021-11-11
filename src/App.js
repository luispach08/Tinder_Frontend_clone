import './App.css';
import Header from './Components/Header/Header'
import TinderCards from './Components/Tindercards/TinderCards';
import SwipeButtons from './Components/SwipeB/SwipeButtons';
import Chats from './Components/Chats/Chats';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ChatScreen from './Components/ChatScreen/ChatScreen';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/chat/:person">
            <Header backbutton="/chat"/>
              <ChatScreen />
          </Route>
          

          <Route path="/chat">
            <Header backbutton="/"/>
              <Chats />
          </Route>

          <Route path="/">
            <Header />
              <TinderCards />
              <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
