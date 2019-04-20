import React from 'react'
import Axios from 'axios'
import PostItem from './PostItem';

const PostList = (props) => {
const {posts, isGrid} = props

    return (
         <div className="row">
                {posts.map(post => {
                    return <PostItem post={post} isGrid={isGrid}/>
                })}
            </div> 
    )
}


export default PostList;
