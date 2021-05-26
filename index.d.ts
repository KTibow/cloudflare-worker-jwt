/**
 * JWT
 *
 * @class
 * @constructor
 * @public
 */
declare class JWT {

    /**
     * Signs a payload and returns the token
     * 
     * @param {object} payload The payload object. To use `nbf` (Not Before) and/or `exp` (Expiration Time) add `nbf` and/or `exp` to the payload.
     * @param {string} secret A string which is used to sign the payload.
     * @param {'HS256' | 'HS512'} [algorithm=HS256] The algorithm used to sign the payload, possible values: `HS256` or `HS512`
     * @returns {Promise<string>} Returns token as a `string`.
     */
    sign(payload: object, secret: string, algorithm?: "HS256" | "HS512"): Promise<string>

    /**
     * Verifies the integrity of the token and returns a boolean value.
     * 
     * @param {string} token The token string generated by `jwt.sign()`.
     * @param {string} secret The string which was used to sign the payload.
     * @param {'HS256' | 'HS512'} [algorithm=HS256] The algorithm used to sign the payload, possible values: `HS256` or `HS512`
     * @returns {Promise<boolean>} Returns `true` if signature, `nbf` (if set) and `exp` (if set) are valid, otherwise returns `false`. 
     */
    verify(token: string, secret: string, algorithm?: "HS256" | "HS512"): Promise<boolean>

    /**
     * Returns the payload **without** verifying the integrity of the token. Please use `jwt.verify()` first to keep your application secure!
     * 
     * @param {string} token The token string generated by `jwt.sign()`.
     * @returns {object | null} Returns payload `object`.
     */
    decode(token: string): object | null
}
declare const _exports: JWT
export = _exports