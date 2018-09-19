

 class App{


    init() {
       this.loadPosts();
       let obj = {
		   title: 'Das ist der vierte Eintrag',
		   content: 'test',
	   };

       axios.post('http://mstockenberg.de/blogapi/?case=posts&action=insert', "data=" + JSON.stringify(obj))
       .then(res => {
           console.log(res);
		   
       })
    }

    loadPosts() {
        axios.get('http://mstockenberg.de/blogapi/?case=posts')
        .then(res => {
            console.log(res);
        })
    }

}

let app = new App();
app.init();