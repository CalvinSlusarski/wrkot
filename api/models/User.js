/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
facebookId: {
      type: 'string',
      required: true,
      unique: true
    }
    // local            : {
    //     email        : String,
    //     password     : String,
    // },
    // facebook         : {
    //     id           : String,
    //     token        : String,
    //     email        : String,
    //     name         : String
    // },
    // twitter          : {
    //     id           : String,
    //     token        : String,
    //     displayName  : String,
    //     username     : String
    // },
    // google           : {
    //     id           : String,
    //     token        : String,
    //     email        : String,
    //     name         : String
    // }
  }
  // ,
  // beforeCreate: function(user, cb) {
  //     bcrypt.genSalt(10, function(err, salt) {
  //         bcrypt.hash(user.password, salt, function(err, hash) {
  //             if (err) {
  //                 console.log(err);
  //                 cb(err);
  //             } else {
  //                 user.password = hash;
  //                 cb();
  //             }
  //         });
  //     });
  // }
};

