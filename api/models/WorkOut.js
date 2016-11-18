/**
 * WorkOut.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  //types: {
  // isProfessor: function(lastName){
  //   return (this.userType === 'professor' && !lastName)? false: true;
  // },
  
  attributes: {
    name: {
      //required: true,
      notEmpty: true,
      type: 'string'
    },
    comment: {
      type: 'string'
    },
    // date: { 
    //   type: Date, 
    //   defaultTo: Date.now 
    // },
    owner    : {
      notEmpty: true,
      model: 'User'
    },
    exercises: {
      collection: 'Exercise',
      via: 'workOut'
    }
  }
};


