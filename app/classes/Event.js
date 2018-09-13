/**
 * Leon
 */
class Event {

    init(){
    }
    //Get Element by ID
    id(identifier) {
        return document.getElementById(identifier);
    }
    //Get Elements By Classname
    class(classname) {
        return document.getElementsByClassName(classname);
    }
    //onsubmit Event
    submit() {
        object.onsubmit = function() {
            //do something
        }
    }
     status(){
        if(navigator.onLine) {
            //true or false
        }
        else {
            //true or false
        }
    }
}

let event = new Event();
event.init();

console.log(event.id("test"));
console.log(event.class("card-title"));

//event.id("id"); === document.getElementByID("id");
//event.class("classname") === document.getElementsByClassName(classname);

/**List of all JS ES6 Events

    offline
    onabort
    onafterprint
    onbeforeonload
    onbeforeprint
    onblur
    oncanplay
    oncanplaythrough
    onchange
    onclick
    oncontextmenu
    ondblclick
    ondrag
    ondragend
    ondragenter
    ondragleave
    ondragover
    ondragstart
    ondrop
    ondurationchange
    onemptied
    onended
    onerror
    onfocus
    onformchange
    onforminput
    onhaschange
    oninput
    oninvalid
    onkeydown
    onkeypress
    onkeyup
    onload
    onloadeddata	
    onloadedmetadata
    onloadstart
    onmessage
    onmousedown
    onmousemove
    onmouseout
    onmouseover
    onmouseup
    onmousewheel
    onoffline
    ononline
    onpagehide
    onpageshow
    onpause
    onplay
    onplaying
    onpopstate
    onprogress
    onratechange
    onreadystatechange
    onredo
    onresize
    onscroll
    onseeked
    onseeking
    onselect
    onstalled
    onstorage
    onsubmit
    onsuspend
    ontimeupdate
    onundo
    onunload
    onvolumechange
    onwaiting
    **/