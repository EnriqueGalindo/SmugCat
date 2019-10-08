import React from 'react';
import './Home.css';

import MessagePoster from '../../components/MessagePoster';
import MessageDisplay from '../../components/MessageDisplay';

export default function Home() {
  return (
    <div style={{display: 'flex'}}>
        {/* <div style={{height: '100vh', width: '50vw', background: 'red'}}>
            <MessagePoster />
        </div> */}
        <div style={{height: '100vh', width: '50vw', background: 'blue'}}>
            <MessageDisplay />
        </div>
    </div>
  )
}
