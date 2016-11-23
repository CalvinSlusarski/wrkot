var passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy;

function findById(id, fn) {
  User.findOne(id,function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  });/*).done(function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  });*/
}

function findByFacebookId(id, fn) {
  User.findOne({
    facebookId: id
  },function (err, user) {
    if (err) {
      return fn(null, null);
    } else {
      return fn(null, user);
    }
  });
//   User.findOne({
//     facebookId: id
//   }).done(function (err, user) {
//     if (err) {
//       return fn(null, null);
//     } else {
//       return fn(null, user);
//     }
//   });
}

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: "327801020937293",
    clientSecret: "fc169c925b3ed6f1ebe294dba6154ac5",
    callbackURL: "/user/facebook/callback",
    enableProof: false
  }, function (accessToken, refreshToken, profile, done) {

    findByFacebookId(profile.id, function (err, user) {

      // Create a new User if it doesn't exist yet
      if (!user) {
        User.create({

          facebookId: profile.id

          // You can also add any other data you are getting back from Facebook here 
          // as long as it is in your model

        }, function (err, user) {
          if (user) {
            return done(null, user, {
              message: 'Logged In Successfully'
            });
          } else {
            return done(err, null, {
              message: 'There was an error logging you in with Facebook'
            });
          }
        });
        /*.done(function (err, user) {
          if (user) {
            return done(null, user, {
              message: 'Logged In Successfully'
            });
          } else {
            return done(err, null, {
              message: 'There was an error logging you in with Facebook'
            });
          }
        });*/

      // If there is already a user, return it
      } else {
        return done(null, user, {
          message: 'Logged In Successfully'
        });
      }
    });
  }
));