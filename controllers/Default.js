'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.payyourfinesHashCancelar_pagoPOST = function payyourfinesHashCancelar_pagoPOST (req, res, next, body, hash) {
  Default.payyourfinesHashCancelar_pagoPOST(body, hash)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.payyourfinesHashComprobar_cancelacionPATCH = function payyourfinesHashComprobar_cancelacionPATCH (req, res, next, body, hash) {
  Default.payyourfinesHashComprobar_cancelacionPATCH(body, hash)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
