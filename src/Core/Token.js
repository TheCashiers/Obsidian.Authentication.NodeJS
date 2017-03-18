'use strict';
import fetch from 'node-fetch';
export class Token{
    expiresIn(seconds) {
        this.expire = seconds;
    }
    async refresh() {
        
    }
    createUri(options, tokenType) {
        var scopes = Array.isArray(options.scopes) ? options.scopes.join(' ') : toString(options.scopes);
        return `${options.authorizationUri}?response_type=${options.tokenType}&client_id=${options.clientId}&redirect_uri=${encodeURI(options.redirectUri)}&scope=${scopes}`
    }
}