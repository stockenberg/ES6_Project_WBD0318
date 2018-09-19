
import Post from './Post.js';

class App {


    init() {
        Post.loadPosts();
        /*
        let obj = {
            title: 'value',
            content: 'test'
        };

        axios.post('http://mstockenberg.de/blogapi/?case=posts&action=insert', "data=" + JSON.stringify(obj))
            .then(res => {
                console.log(res);
            })
          */  
    }

}

let app = new App();
app.init();