/**
 * Leon
 */
class Events {

    init(){
    }

    //Get Element by ID
    static id(identifier) {
        return document.getElementById(identifier);
    }

    //Get Elements By Classname
    static class(classname) {
        return document.getElementsByClassName(classname);
    }

    //Get Elements By Tagname
    static tag(tagname) {
        return document.getElementsByTagName(tagname);
    }

    //Get Form by Name
    static form(formname){
        return document.forms[formname];
    }

}

export default Events;
