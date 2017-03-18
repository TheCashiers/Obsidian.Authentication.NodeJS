'use strict';
import { Token } from './Token';
import { ImplicitAuthentication } from '../Authentication/Implicit';
import { AuthorizationCodeAuthentication } from '../Authentication/AuthorizationCode';
export class ObsidianClient{
    constructor(config) {
        this.clientId = config.clientId;
        this.clientSecret = config.clientSecret;
        this.accessTokenUri = config.accessTokenUri;
        this.authorizationUri = config.authorizationUri;
        this.redirectUri = config.redirectUri;
        this.scopes = config.scopes;
        this.token = new Token();
        this.implicit = new ImplicitAuthentication(this);
        this.code = new AuthorizationCodeAuthentication(this);
    }
}


