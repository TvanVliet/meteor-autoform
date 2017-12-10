import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
 
export const Documents = new Mongo.Collection('documents');

DocumentsSchema = new SimpleSchema({
  clientname: {
    label: "Client Name",
    type: String,
    max: 100
  },
  clientage: {
  	label: "Client Age",
    type: Number,
  },
});

// <template name="saveDocument">
//   {{> quickForm collection="Documents" id="saveDocument" type="insert"}}
// </template>