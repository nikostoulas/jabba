/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }
  github: {
    timeout: 5000,
    clientId: 'd8455a01969372e7cefe',
    clientSecret: '5d8e5ebe481189ddb3576b518879fb29eaef2814'
  },

  repos: [
    'https://github.com/nikosd23/camel-blueprint-phantomconsumers-itest',
    'https://github.com/nikosd23/apollo-prototype'
  ]

};
