/**
 * Execute shell commands
 */
var Promise = require('promise');
var spawn = require('child_process').spawn;

/**
 * Returns a promise that will resolve with the exit code.
 * @param cmd
 * @param onDataCb
 */
exports.exec = function(cmd, onDataCb) {
  return new Promise(function (resolve, reject) {
    var args = cmd.split(" ");
    var cmdName = args.shift();
    var run ;
    try {
      run = spawn(cmdName, args);
      run.stdout.on('data', function(data) {
        onDataCb(data.toString());
      });
      run.stderr.on('data', reject);
      run.on('close', resolve);
    } catch(e) {
      return reject(e);
    }
  });
};


//exports.exec('las -s', function(data) { console.log(data)}).then(function(data) { console.log('exited with'+ data)});
