import React , {useContext} from 'react'
import {AppContext} from '../ContextStorage'

const About = () => {
    const {isGrid, isLight} = useContext(AppContext)
    return (
        <div>
            <h1>This is About page</h1>
            <p className="flow-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis dolorum
                doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat quis dolore
                voluptatem aperiam possimus hic! Eveniet, id aliquam.
            </p>
            <p className="flow-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in veritatis dolorum
                doloremque nisi accusamus nostrum, enim qui, beatae assumenda fugiat quis dolore
                voluptatem aperiam possimus hic! Eveniet, id aliquam.
            </p>
        </div>
    )
}

export default About
