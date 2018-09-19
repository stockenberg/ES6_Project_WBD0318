/**
 * Marten
 */
import Templates from './Templates.js';
import Events from './Events.js';

class Post{
    create( ){

    }

    static renderPosts(template) {
        let event = new Events();
        event.class('posts')[0].innerHTML = template;
    }

    deletePost() {

    }

    updatePost() {
        
    }

    static loadPosts() {
        return axios.get('http://mstockenberg.de/blogapi/?case=posts')
        .then(res => {
            let template = Templates.postTemplate(res.data[0]);
            this.renderPosts(template);
        })
    }

   
}

export default Post;