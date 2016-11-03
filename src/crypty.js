import crypto from "crypto";

/**
 * Easily create a hash from a string.
 *
 * @see https://en.wikipedia.org/wiki/Hash_function
 * @param  {String} text                      Text to create a hash.
 * @param  {String} [opt.encoding="hex"]      Encoding output.
 * @param  {String} [opt.algorithm="sha256"]  Algorithm used to create a hash.
 * @param  {String} [opt.secret=false]        Crypto key. Use to be created hash with more secure.
 * @return {String}                           Resulted hash.
 */
export const crypty = function (text, /*Opt*/{
	encoding = "hex",
	algorithm = "sha256",
	secret:_secret = false,
} = {}) {
	const secret = do{
		if (_secret === false) {
			if (process.env.CRYPTY_SECRET) {
				process.env.CRYPTY_SECRET
			} else {
				"6vital-celia-froth-koala7-tic9"
			}
		} else {
			_secret
		}
	}

	const hash = crypto.
		createHmac(algorithm, secret).
		update(text).
		digest(encoding);

	return hash;
}

/**
 * Create a salt with a login.
 *
 * @param  {String} username               Username to create hash.
 * @param  {String} password               Password to create hash.
 * @param  {String} [opt.encoding="hex"]   Encode output.
 * @param  {String} [opt.algorithm="md5"]  Use to create hash from the password.
 * @return {String}                        Resulted hash.
 */
export const saltLogin = function (username, password, /*Opt*/{encoding="hex", algorithm="md5"} = {}) {
	const passmd5 = crypto.
		createHash(algorithm).
		update(password).
		digest(encoding);

	return saltLoginMd5(username, passmd5);
}

/**
 * Create a salt with login, but required the password how MD5.
 *
 * @param  {String} username            Username to craete hash.
 * @param  {String} passwordMd5         MD5 Password to create hash.
 * @return {String}                     Resulted hash.
 */
export const saltLoginMd5 = function (username, passwordMd5) {
	return crypty(`${username}${passwordMd5}`);
}

export default crypty;
