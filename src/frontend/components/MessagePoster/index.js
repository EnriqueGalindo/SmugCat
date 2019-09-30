import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from './messageActions';

export default function index() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(sendMessage(text))
    }

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={handleClick}>Send Message</button>
        </div>
    )
}
