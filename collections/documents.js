import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
 
export const Documents = new Mongo.Collection('documents');

DocumentsSchema = new SimpleSchema({
  clientname: {
    label: "Client Name",
    "name":"name",
    type: String,
    max: 100
  },
  clientage: {
  	label: "Author",
    type: Number,
  },
});

// <template name="saveDocument">
//   {{> quickForm collection="Documents" id="saveDocument" type="insert"}}
// </template>