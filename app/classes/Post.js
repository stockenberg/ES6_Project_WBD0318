/**
 * Marten
 */
import Templates from './Templates.js';
import Events from './Events.js';
import Notification from './Notification.js';

class Post{

    static create(){

        // 1. Validate form data

        // if data is clean -> axios.get(url).then(res => {})

	}

    static renderPosts(template) {
        Events.class('posts')[0].innerHTML = null;

        Events.class('posts')[0].innerHTML = template;

    }
    /**
    *Sarah
    */
    static deletePost(id) {
     axios.get('http://mstockenberg.de/blogapi/?case=posts&action=delete&id=' + id)
      .then (result => {

        Notification.success("Erfolg");
        this.loadPosts();
        
      })
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
            Notification.success('Posts loaded', 'Posts wurden erfolgreich geladen');

        })
    }


}

export default Post;
