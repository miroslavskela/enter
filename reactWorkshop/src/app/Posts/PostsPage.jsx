import React from 'react'
import Axios from 'axios'
import PostList from '../Posts/PostList';
import {postService} from '../../services/postsService'


class PostsPage extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
       this.loadPosts()
    }

    loadPosts(){
        postService.fetchPosts()
        .then(response => this.setState(() => {
            return {
                posts:response
            }
        }))
    }

    render() {
        if (this.state.posts.length === 0) {
            return <h4>Loading...</h4>
        }

        return (
            <div>
                <h1>Posts Page</h1>
                <PostList posts={this.state.posts}/>
            </div>
           
        )
    }
}

export default PostsPage
