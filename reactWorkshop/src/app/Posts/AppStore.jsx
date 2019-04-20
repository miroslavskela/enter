import React from 'react';
import App from '../App';
import {AppProvider} from '../ContextStorage'

class AppStore extends React.Component {
    state = {
        isGrid: true,
        isLight: true
    }
    onChangeLayout = () => {
        this.setState({
            isGrid: !this.state.isGrid
        })
    }

    onChangeLight = () => {
        this.setState({
            isLight: !this.state.isLight
        })
    }
    render() {
        console.log(this.props.children)
        const value = {
            isGrid:this.state.isGrid,
            isLight:this.state.isLight,
            onChangeLayout:this.onChangeLayout,
            onChangeLight:this.onChangeLight
        }
        return (
        <AppProvider value={value}>
        {this.props.children}
        </AppProvider>
        )
    }
}
export default AppStore;
