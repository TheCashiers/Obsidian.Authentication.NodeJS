'use strict';
import { getToken } from '../Utils/WebRequest';
export class AuthorizationCodeAuthentication {
    constructor(client) {
        this.client = client;
        this.getToken = getToken;
    }

}