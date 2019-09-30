import React from 'react'
import { useSelector } from 'react-redux';

export default function index() {
    const messages = useSelector(state => state.messages.messages)

    return (
        <div>
            {messages.map(message => <div>{message}</div>)}
        </div>
    )
}
