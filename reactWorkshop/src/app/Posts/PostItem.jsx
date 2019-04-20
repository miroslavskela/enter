import React, {useContext, useState} from 'react'
import Axios from 'axios'
import {AppContext} from '../ContextStorage'

const PostItem = (props) => {
const [isSelected, setSelected] = useState(false)
const [count, setCount] = useState(0)
const {isGrid, isLight, onChangeLayout, onChangeLight} = useContext(AppContext)
const {post} = props


const itemStyle = isLight ? 'white' : 'blue-grey darken-1'
const textStyle = isLight ? "black-text":"white-text"
const selectedText = isSelected ? "Unselect":"Select"
    return (
        <div className={`col s12 ${isGrid ? 'm4' : ''}`}>
            <div className={`card ${itemStyle}`}>
                <div className={`card-content ${textStyle}`}>
                    <span className="card-title">{post.shortTitle}</span>
                    <p>{isGrid ? post.shortBody:post.body}</p>
                </div>
            <div className="card-action" onClick={() =>{ 
                setSelected((count) => !isSelected)
                 setCount(count => !isSelected ? count + 1:count)}
                 }>
               {selectedText}
               <p>Selected {count} times.</p>
            </div>
            </div>
        </div>
    )
}

export default PostItem
