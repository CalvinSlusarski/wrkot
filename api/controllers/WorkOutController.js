/**
 * WorkOutController
 *
 * @description :: Server-side logic for managing workouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
 create: function (req, res) {
    console.log(req.body);
    console.log(req.isAuthenticated);
    if(req.isAuthenticated() && req.user){
      var temp = req.body;
      temp.owner = req.user.id;
      WorkOut.create(temp).exec(function(err, workout){
          //if(err) throw err;
        return res.json(workout);
      });

    }     

    // return res.json({
    //   todo: 'Not implemented yet!'
    // });
  },

};

