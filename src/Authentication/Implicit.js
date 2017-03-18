'use strict';
import { getToken } from '../Utils/WebRequest';
export class ImplicitAuthentication {
    constructor(client) {
        this.client = client;
        this.getToken = getToken;
    }
    getUri(options) {
        return this.__proto__.token.createUri(options, 'token');
    }

}