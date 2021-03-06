// Copyright 2018 Trinkler Software AG (Switzerland).
// Trinkler Software provides free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version <http://www.gnu.org/licenses/>.

/**
 * @fileOverview Wraps keccak library to expose blake2b hashing algorithm.
 */

// Module imports.
const blake2b = require('blake2b');

// Default length.
const BYTES = 32;

/**
 * Returns a hash of the passed data using the blake2b algorithm.
 *
 * @param {Buffer|string} data - Data to be hashed.
 * @param {string} [encoding] - Required output encoding.
 * @return {Buffer|string} The hashed value.
 */
export default function(data, encoding) {
    const h = blake2b(BYTES);
	h.update(data);

    return encoding === 'hex' ? h.digest('hex') : h.digest();
}
