import { Template } from 'meteor/templating';

import './body.html';

Template.body.events({
  'click .button'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tasks.insert({
      text, // current time
    });
  },
});