import { Template } from 'meteor/templating';
import { Temas } from '../lib/collections.js';

import './main.html';

// Importar temas
Template.body.helpers({
  temas(){
    return Temas.find({});
  }
});
