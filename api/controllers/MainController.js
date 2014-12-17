/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  socket: function(req, res, next) {
    res.json();
    Socket.io.broadcast('message', 'hi')
  }
};

