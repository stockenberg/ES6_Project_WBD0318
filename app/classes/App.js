
import Post from './Post.js';


class App {

    /**
     * Initialize the JavaScript logic
     * register handlers
     */
    init() {
        Post.loadPosts();
        this.handlePostSubmit();

        /**
         * How does this fckn work with native js ?!
         */
        $(document).on('click', '.delete', function (e) {
            e.preventDefault();

            Post.deletePost(e.target.dataset.id);
            console.log('test');
        })
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