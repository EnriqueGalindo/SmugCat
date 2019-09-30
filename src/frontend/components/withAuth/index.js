import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom';

export default function withAuth(ProtectedComponent) {
    return props => {
        const [loading, setLoading] = useState(true);
        const [redirect, setRedirect] = useState(false);

        const render = () => {
            if(loading) return null;
            if(redirect) {
                return <Redirect to="/" />
            }

            return <>
                <ProtectedComponent {...props} />
            </>
        }

        useEffect(() => {
            fetch('/api/checktoken')
                .then(res => {
                    if (res.status === 200)
                        setLoading(false);
                    else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    setLoading(false);
                    setRedirect(true);
                })
        }, [])

        return render()
    }
    
}
