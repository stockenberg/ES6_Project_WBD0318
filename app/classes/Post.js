/**
 * Marten
 */
import Templates from './Templates.js';
import Events from './Events.js';

class Post{

    static create(){
        
        // 1. Validate form data

        // if data is clean -> axios.get(url).then(res => {})
        
	}

    static renderPosts(template) {
        let event = new Events();

        event.class('posts')[0].innerHTML = null;

        event.class('posts')[0].innerHTML = template;
    }

    deletePost() {

    }

    updatePost() {
        
    }

    /**
     * Loads posts from URL and Builds HTML templates
     */
    static loadPosts() {
        return axios.get('http://mstockenberg.de/blogapi/?case=posts')
        .then(res => {
            let template = "";

            for(var i = 0; i < res.data.length; i++){
                template = template + Templates.postTemplate(res.data[i]);
            }
            this.renderPosts(template);

        })
    }

   
}

export default Post;