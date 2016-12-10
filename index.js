'use strict';
console.log('Loading event');

var meltsy = require('./lib/meltsy').meltsy

exports.handler = function(event, context, callback) {

  meltsy.getUnshipped(function(res){
    var unshipped = res
    callback(null, unshipped);
  })

};
