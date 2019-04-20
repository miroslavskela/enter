import React from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import AppStore from './Posts/AppStore';


class App extends React.Component {
constructor(props){
    super(props)
    this.state = {
        isGrid: true
    }
}

     

    

    render() {
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
}

export default App
