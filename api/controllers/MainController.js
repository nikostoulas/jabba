/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  socket: function(req, res, next) {
    res.json({status:'OK'});
    sails.sockets.blast('message', {data:'hi'});
  }
};

