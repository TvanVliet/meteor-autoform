import '../imports/ui/body.js';
import { Documents } from '../collections/documents.js';

const Collections = {
  Documents,
};

Template.registerHelper('Collections', Collections);

window.Documents = Documents