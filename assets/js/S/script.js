
/*** axios load ***/
let getCategory;

axios.get('assets/json/search.json')
    .then(function(res) {
		getCategory = res.data.blog;
    }
);


$(document).ready(function(){

	/* show search output */
	let key = $('.search').find("input");
	let keyConntent = $('.search').find("span")[0];
  
	key.click(function(){
		keyConntent.style = "opacity:1";
	});
	
	
	/* search mechanic */
	key.keydown(function(e){	//or keyup
		
		if( /^[a-zA-Z0-9]{1}$/.exec(e.key) || (e.key == "Backspace" && e.target.value.length > 1) ) {
			
			let getSearch = e.target.value + e.key;
			if( e.key == "Backspace" ) {
				getSearch = getSearch.slice(0, -10);
			}
			
			let seachWort = getSearch.split(" ");
			//seachWort.length
			//seachWort[i]
			//console.log(seachWort[0]);
			
			let ar = [];
			
			for( var i = 0; i < getCategory.length; i++ ) {
				
				let result = getCategory[i].title;
				let wort = result.split(" ");
				
				for( var z = 0; z < wort.length; z++ ) {
					for( var v = 0; v < seachWort.length; v++ ) {
						if( wort[z].toLowerCase().search( seachWort[v] ) === 0 ) {
							
							ar.push(result);
							console.log( result +" | "+ wort[z] +" - "+ z +" | "+ seachWort[v] +" - "+ v +" yes" );
						} else {
							console.log( result +" | "+ wort[z] +" - "+ z +" | "+ seachWort[v] +" - "+ v +" no" );
						}
					}
				}
				console.log("--------------");
			}
			
			
			ar.filter(function(item, pos) {
				console.log( ar[pos] );
			});
			
			keyConntent.textContent = e.key;	// search output
			
		}
		
		
		//if( e.target.textLength > 0 ) {} // min text length
		
		//console.log( Object.keys( getCategory[0]['tiere'] ) );	// object length
		
		/*
		if( e.key == "a" ) {
			keyConntent.style = "left:"+point+"px";
		}

		if (e.which == 3) {
			alert('Es wurde A gedrückt');
		}*/
		
	});
	
});
