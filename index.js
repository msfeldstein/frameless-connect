module.exports = function(port) {
  port = port || 8080;
  var mdns = require('mdns');
  var ad = mdns.createAdvertisement(mdns.tcp('framerstudio'), port);
  ad.start();
}
