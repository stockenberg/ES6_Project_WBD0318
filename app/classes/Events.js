/**
 * Leon
 */
class Events {

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

export default Events;
