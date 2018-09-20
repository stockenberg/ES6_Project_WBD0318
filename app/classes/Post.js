/**
 * Marten
 */
import Templates from './Templates.js';
import Events from './Events.js';

class Post{
	
    static create(){
        console.log('test-post');
			
			var title = $('#formtitle').val();
			if((title === "")||(title === null)){
			  alert('Please enter Post Title');
			}
			
			var tags = $('#formtags').val();
			if((tags === "")||(tags === null)){
			  alert('Please enter Post Tags');
			}
			
			var author = $('#formauthor').val();
			if((author === "")||(author === null)){
			  alert('Please enter an Author');
			}
			
			var content = $('#formcontent').val();
			if((content === "")||(content === null)){
			  alert('Please enter Content');
            }
            
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