/**
 * WorkOutController
 *
 * @description :: Server-side logic for managing workouts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
 create: function (req, res) {

    if(req.isAuthenticated() && req.user){
      var temp = req.body;
      temp.owner = req.user.id;
      WorkOut.create(temp).exec(function(err, workout){
          //if(err) throw err;
        return res.json(workout);
      });

    }     

    return res.json({
      todo: 'Not implemented yet!'
    });
  },
  find: function (req, res) {
    // console.log(req.isAuthenticated() );
    // console.log(req.user);
    // console.log(req.isAuthenticated() && req.user);
    if(req.isAuthenticated() && req.user){
      // console.log(req.user.id);
      //  WorkOut.where({owner: req.user.id}).exec(function(err, workouts){
      //    console.log(workouts);
      //     //if(err) throw err;
      //   return res.json(workouts);
      // });
      
      WorkOut.find({owner: req.user.id}).exec(function(err, workouts){
        console.log('!!!');
        console.log({workouts: workouts});
          //if(err) throw err;
        return res.json({workouts: workouts});
      });
    } else {
       return res.json({
        todo: 'Not implemented yet!'
      });
    }     
    // return res.json({
    //   todo: 'Not implemented yet!'
    // });
  },
  //  ProfileController: {
  //    'GET '
  //  }
  // get:function (req, res) {

  //   if(req.isAuthenticated() && req.user){
  //      WorkOut.find({owner: req.user.id}).exec(function(err, workouts){
  //         //if(err) throw err;
  //       return res.json(workouts);
  //     });
  //   }     
  //   return res.json({
  //     todo: 'Not implemented yet!'
  //   });
  // },
};

