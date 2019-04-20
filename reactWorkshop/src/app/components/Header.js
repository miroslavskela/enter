import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {AppContext} from '../ContextStorage'

const Header = props => {

    const {onChangeLayout, onChangeLight} = useContext(AppContext)
    return (
        <header>
            <nav className="red darken-2">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo card-title">
                            {props.title}
                        </Link>
                        <ul className="right">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <a
                                    onClick={e => { e.preventDefault()
                                         onChangeLayout()
                                    }}
                                >
                                    <i className="material-icons">view_module</i>
                                </a>
                            </li>
                            <li>
                                <a onClick={e => {
                                        e.preventDefault()
                                        onChangeLight()
                                    }}
                                >
                                    <i className="material-icons">wb_incandescent</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
