/**
 * Marten
 */
import Templates from './Templates.js';
import Events from './Events.js';

class Post{

    create(){
        
        
        
	}


    static renderPosts(template) {
        let event = new Events();
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