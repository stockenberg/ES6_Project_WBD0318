
class Search {
	
	constructor(key) {
		this.key = key;
	}
	
	
	getBlog(searchText) {
		
		axios.get('http://www.mstockenberg.de/blogapi/?case=search&title='+searchText)
			.then(function(res) {
				
				let searchResult = res.data;
				//console.log(searchResult);
				
				let subResult = "";
				for(let i=0; i < searchResult.length; i++) {
					subResult += '<li>'+
									'<h3>'+ searchResult[i].title +'</h3>'+
									'<span>'+ searchResult[i].content +'</span>'+
								 '</li>';
				}
				
				let searchConntent = $('.search').find("div")[0];
				searchConntent.style = "opacity:1";
				searchConntent.innerHTML = searchResult.length +'<span> Treffer</span><ul>'+ subResult +'</ul>';
			}
		);
	}
	
	
	result() {
		console.log(this.key);
	}

}



/* get search <input> key */
let key = $('.search').find("input");

/*** do keypress in to the search <input> ***/
key.keydown(function(e){
	
	let search = new Search(e.key);
	//search.result();		// test
	
	
	if( /^[a-zA-Z0-9]{1}$/.exec(e.key) || (e.key == "Backspace" && e.target.value.length > 1) ) {
		
		/* create serchKeys & backspace serch or stop */
		let serchKeys = e.target.value + e.key;
		if( e.key == "Backspace" ) {
			serchKeys = serchKeys.slice(0, -10);
		}
				
		/* start search */
		search.getBlog(serchKeys);
	}
});

/*** close searchConntent ***/
$('.search input').focus().blur( function() {
		
	if( $('.search div').click() !== true ) {
		$('.search .searchConntent').css('opacity','0');
	}
	
});


function test() {
	let lal = [{"id":"8","title":"Das ist der dritte Eintrag","content":"test"},{"id":"2","title":"Das ist der zweite Eintrag","content":"Where are my testicles, Summer? Hmmm, human music. You're talking about Inception? My man!\r\n\r\nNot today bitch! I'd like to order one large person with extra people please. white people, no no no black people... and hispanic on half. Me irresponsible? All I wanted was for you to hand me a screwdriver! But instead you had me buckle down and make you a roofie juice serum, so you can roofie that poor girl at your school. W-w-w-w--are you kidding me, Morty?! You're really gonna try to take the high road on this one? Y'know your-you're a little creep, Morty! Your-your-your-you're just a little creepy creep person! If anything happened to you I would kill myself! I love you bad, bobo!\r\n\r\nAww, gee, you got me there, Rick. Oh, wow. That's an intense line of questioning, Snuffles Don't even trip about your pants, dawg. We got an extra pair right here. You ask alotta questions Morty, not very charismatic of you.\r\n\r\nThis is Principal Vagina. No relation. You know what a vole is, Morty? You know what a vole is? That just sounds like slavery with extra steps. It's like the N word and the C word had a baby, and it was raised by all the bad words for Jews."},{"id":"1","title":"Das ist der erste Eintrag","content":"It's a dream, Morty! We're in your dog's dream. The night the dogs captured us, after you cried and crapped your pants, we-we all went to sleep. Then I used my dream inceptors to put the two of us inside Snuffles' dream. Nobody's killing me until after I catch my wife with another man. Rubber baby buggy bumpers! Please god, oh lord, hear my prayers\u2026! YES! Fuck you god, not today bitch!\r\n\r\nThey're not infinite universes left in sync with the show. Okay, take it easy Rick. T-that's dark. Since we're fighting, if you ever have an affair with that guy, I will come to the hotel room and blow my brains out all over your naked bodies. Flip the pickle over.\r\n\r\nYou're growing up fast, Morty. You're going into a great big thorn straight into my ass. They're robots Morty! It's okay to shoot them! They're just robots! Snuffles was my slave name. You can call me Snowball, because my fur is pretty and white. He threatened to turn me in to the government, so I made him and the government go away!\r\n\r\nSnuffles want to be understood. Snuffles need to be understood. Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet. What the fuck is going on?! Rick, I don't like glowing rocks in the kitchen trash!"}];
	
}


