/**
 * Leon
 */

import Events from './Events.js';

class Notification{
    /**
     * TODO : Multiple notifications stack
     */

    static success(title, description) {
        Events.id("notification-container").style.display = "block";
        Events.id("notification-animation").style.background = "#0095f7";
        Events.id("notification-animation").style.animation = "n_pulse_blue 1.5s infinite;";
        Events.id("notification-title").innerHTML = title;
        Events.id("notification-description").innerHTML = description;
        
        //Remove notification after 5 seconds automatically
        setTimeout(function(){ 
            Events.id("notification-container").style.display = "none";
        }, 5000);
        
    }
    
      static warn(title, description) {
        Events.id("notification-container").style.display = "block";
        Events.id("notification-animation").style.background = "#ffb600";
        Events.id("notification-animation").style.animation = "n_pulse_yellow 1.5s infinite";
        Events.id("notification-title").innerHTML = title;
        Events.id("notification-description").innerHTML = description;
        
        //Remove notification after 5 seconds automatically
        setTimeout(function(){ 
            Events.id("notification-container").style.display = "none";
        }, 5000);
    }
    
    static error(title, description) {
        Events.id("notification-container").style.display = "block";
        Events.id("notification-animation").style.background = "#f72700";
        Events.id("notification-animation").style.animation = "n_pulse_red 1.5s infinite";
        Events.id("notification-title").innerHTML = title;
        Events.id("notification-description").innerHTML = description;
        
        //Remove notification after 5 seconds automatically
        setTimeout(function(){ 
            Events.id("notification-container").style.display = "none";
        }, 5000);
    }
    

}

export default Notification;


//Notification.error("Fehler!", "Error 0384938");
//Notification.success("Erfolgreich!", "Fantastic new post is online");
//Notification.warn("Warnung!", "Tu das lieber nicht")
