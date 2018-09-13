
class Search {
	
	constructor(key) {
		this.key = key;
	}
	
	
	getBlog(searchText) {
		
		axios.get('http://www.mstockenberg.de/blogapi/?case=search&title='+searchText)
			.then(function(res) {
				//console.log( res.data[0].title );
				console.log( res.data );
			}
		);
	}
	
	
	result() {
		console.log(this.key);
	}

}

let search = new Search("test");
search.result();





/* show search output */
	let key = $('.search').find("input");
	
key.keydown(function(e){	//or keyup
		
	if( /^[a-zA-Z0-9]{1}$/.exec(e.key) || (e.key == "Backspace" && e.target.value.length > 1) ) {
		
		let serchKeys = e.target.value + e.key;
		console.log( serchKeys );
		
		search.getBlog(serchKeys);
		
	}
});

