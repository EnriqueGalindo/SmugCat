import React,{useState, useEffect} from 'react'
import { useSelector, useStore } from 'react-redux';

export default function index() {
    const messages = useSelector(state => state.messages)

    useEffect(() => {
        console.log(messages)
    }, [])
    return (
        <div>
            {/* {messages.map(message => <div>{message}</div>)} */}
        </div>
    )
}
