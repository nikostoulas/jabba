var forEach = require('async-foreach').forEach;

module.exports = {

  listBranches: function(options, callback) {
    ShellService.exec('git ls-remote --heads origin', callback);
  },

  fetchRepo: function(url, callback) {
    ShellService.exec('git clone '+ url, callback);
  },

  fetchRepos: function(callback) {
    forEach(sails.config.repos, function(item) {
      this.fetchRepo(item, callback);
    });
  }
};
