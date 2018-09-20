
import Post from './Post.js';

class Templates{



    static postTemplate(data) {
       return `<img class="card-img-top" src="http://placehold.it/750x300" alt="Card image cap">
       <div class="card-body">
           <h2 class="card-title">${data.title} - ${data.id}</h2>
           <p class="card-text">${data.content}</p>
           <a href="#" class="btn btn-primary">Read More →</a>
       </div>
       <div class="card-footer text-muted">
           Posted on January 1, 2017 by
           <a href="#">Start Bootstrap</a>
       </div>
       <a href="#" class="btn btn-primary delete" data-id="${data.id}">Delete</a>
   `
    }

}

export default Templates;
