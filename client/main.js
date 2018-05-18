import { Template } from 'meteor/templating';
import { Temas } from '../lib/collections.js';

import './main.html';

// Importar temas
Template.body.helpers({
  temas(){
    return Temas.find({});
  }
});

Template.crear.events({
  'submit .add-form': function(event){
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Temas.insert({
      text:text,
      createdAt: new Date()
    });

    target.text.value = "";
    $('#crearTema').modal('close');

    return false;
  }
});
