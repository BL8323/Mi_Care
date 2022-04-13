import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ForwardAuthenticated = () => {
    return (
        <>
            <Route exact path='/login' render={() => <Redirect to='/dashboard' />} />
            <Route exact path='/signup' render={() => <Redirect to='/dashboard' />} />
        </>
    )
}

export default ForwardAuthenticated
