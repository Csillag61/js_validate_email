'use strict';

/**
 * @param {string} email
 *
 * @returns {boolean}
 */

/**
 * @param {string} email
 *
 * @returns {boolean}
 */
function validateEmail(email) {
  const emailRegex = new RegExp(
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\./i
  );
  const invalidCharsRegex = /[!$%&'*+/=?^{|}~]/;

  return emailRegex.test(email) && !invalidCharsRegex.test(email);
}

module.exports = validateEmail;
