# Cloudflare Worker JWT

A lightweight JWT implementation with ZERO dependencies for Cloudflare Workers.

## Contents

- [Usage](#usage)
- [Install](#install)

## Usage

### Simple Example

```javascript
const jwt = require('@tsndr/cloudflare-worker-jwt')

// Creating a token
const token = jwt.sign({ name: 'John Doe', email: 'john.doe@gmail.com' }, 'secret')

// Verifing token
const isValid = jwt.verify(token, 'secret')

// Decoding token
const payload = jwt.decode(token)

```

### `jwt.sign(payload, secret, [algorithm])`

Signs a payload and returns the token.


`payload`

The payload object.


`secret`

A string which is used to sign the payload.


`algorithm` (optional, default: `HS256`)

The algorithm used to sign the payload, possible values: `HS256` or `HS512`


### `jwt.verify(token, secret, [algorithm])`

Verifies the integrity of the token and returns a boolean value.


`token`

The token string generated by `jwt.sign()`.


`secret`

A string which is used to sign the payload.


`algorithm` (optional, default: `HS256`)

The algorithm used to sign the payload, possible values: `HS256` or `HS512`

### `jwt.decode(token)`

Returns the payload without verifying the integrity of the token.


`token`

The token string generated by `jwt.sign()`.


## Install

```
npm i @tsndr/cloudflare-worker-jwt
```