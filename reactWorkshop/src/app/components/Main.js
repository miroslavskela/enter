import React from 'react'
import { Route } from 'react-router-dom'

import PostsPage from '../Posts/PostsPage'
import About from '../About/About'


const Main = props => {
    return (
        <main className="container">
            <Route path="/about" component={About} />
            <Route exact path="/" component={PostsPage} />
        </main>
    )
}

export default Main
