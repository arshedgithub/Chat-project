import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/pages/signin';
import ChatBox from './components/pages/chatBox';
import { AuthProvider } from './contexts/authContext';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <AuthProvider>
        <Switch>
          <Route path='/chats' component={ChatBox} />
          <Route path='/' component={SignIn} />
        </Switch>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;