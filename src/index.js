import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import { Header } from './components/header.js';
import { Profileinfo } from './components/profileinfo.js';

class Profile extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <Profileinfo/>
      </div>
    )
  }
}

ReactDOM.render(<Profile />, document.getElementById('root'));
