import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import AppStore from './Posts/AppStore';


const App  = () =>  {

    
        return (
            <AppStore>
            <div>
                <Header title="App"/>
                <Main />   
                <Footer />
            </div>
            </AppStore>
        )
    }


export default App
