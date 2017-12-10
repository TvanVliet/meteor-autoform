import { Template } from 'meteor/templating';
import { Documents } from '../../collections/documents.js';

import './body.html';
import '../../collections/documents.js'
import '../../client/main.js'

// Template.body.events({
//   'click .button'(event) {
//     // Prevent default browser form submit
//     event.preventDefault();
 
//     // Get value from form element
//     const target = event.target;
//     const text = target.text.value;
 
//     // Insert a task into the collection
//     Tasks.insert({
//       text, // current time
//     });
//   },
// });