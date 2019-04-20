import {api} from '../shared/api'
import {BASE_URL} from '../shared/constants'
import Post from '../model/Post'
class PostService {

    fetchPosts(){
        return api.get(BASE_URL)
        .then(response => {
            const data = response.data;
            console.log(data)
            const posts = data.map(post => {
               return new Post(post) 
            })
            console.log(posts)
            return posts
        })
    }
}

export const postService = new PostService()
