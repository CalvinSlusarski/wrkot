/**
 * WorkOut.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    comment: {
      type: 'string'
    },
    // date: { 
    //   type: Date, 
    //   defaultTo: Date.now 
    // },
    owner    : { model: 'User' },
    exercises: {
      collection: 'Exercise',
      via: 'workOut'
    }
  }
};
/*
    name: String,
    owner: String,
    comments: String,
    date: { type: Date, default: Date.now },
    exercises: [{
        name: String,
        comments: String,
        series: [{
            weight: String,
            unit: String,
            sets: Number,
            reps: Number
        }]
    }]

*/

