import {BASE_URL} from './constants';

import Axios from 'axios'
class Api {

    get(path, params){
        const url = `${path}/posts`
     return Axios.get(url)
    }
}

export const api = new Api()
