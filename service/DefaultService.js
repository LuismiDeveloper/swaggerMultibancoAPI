'use strict';


/**
 * Cancel Multibanco pending pay(s).
 * This request cancels one or more Multibanco pending payments.
 *
 * body Hash_cancelarpago_body Array of dossiers associated with the pending payment to be cancelled.
 * hash  PayYourFines link hash
 * no response value expected for this operation
 **/
exports.payyourfinesHashCancelar_pagoPOST = function(body,hash) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get dossiers that would be affected by the cancellation of a Multibanco payment.
 * This endpoint is for information only. The dossiers to be cancelled are received and those that would be affected are returned.
 *
 * body Hash_comprobarcancelacion_body Array of dossiers to consult
 * hash  PayYourFines link hash
 * no response value expected for this operation
 **/
exports.payyourfinesHashComprobar_cancelacionPATCH = function(body,hash) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

