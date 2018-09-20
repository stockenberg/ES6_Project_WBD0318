
import Post from './Post.js';


class App {

    /**
     * Initialize the JavaScript logic
     * register handlers
     */
    init() {
        Post.loadPosts();
        this.handlePostSubmit();
    }

    /**
     * Post Create - Submit Form Handler
     */
    handlePostSubmit(){
        document.getElementById('createPosts').onsubmit = function () {
            Post.create()
        }
    }

}

let app = new App();
app.init();