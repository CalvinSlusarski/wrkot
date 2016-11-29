// // `config/policies/filterByUser.js`
// module.exports = function filterByUser (req, res, next) {

//   if (req.isAuthenticated() && req.user) {  

//     req.options.where = {
//       owner: req.user.id
//     }

//   }

//   return next();

// }