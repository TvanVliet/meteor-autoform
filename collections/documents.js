import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
 
export const Documents = new Mongo.Collection('documents');

Documents.attachSchema(new SimpleSchema({
  clientname: {
    label: "Client Name",
    type: String,
    max: 100
  },
  clientage: {
  	label: "Client Age",
    type: Number,
  },

},
{ tracker: Tracker }));

// <template name="saveDocument">
//   {{> quickForm collection="Documents" id="saveDocument" type="insert"}}
// </template>