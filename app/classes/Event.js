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
    //Get Elements By Tagname
    tag(tagname) {
        return document.getElementsByTagName(tagname);
    }
    //Get Form by Name
    form(formname){
        return document.forms[formname];
    }
}

let event = new Event();
event.init();

//console.log(event.id("test"));
//console.log(event.class("card-title"));

//event.id("id"); === document.getElementByID("id");
//event.class("classname") === document.getElementsByClassName(classname);
//event.tag("tagname") === document.getElementsByTagName(tagname);
//event.form("formname");
