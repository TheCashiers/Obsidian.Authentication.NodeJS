# Obsidian.Authentication.NodeJS
Obsidian Authentication Node provided a convenient way to access Obsidian-based Authentication Server for NodeJS based servers.

## API Usage
Create a new server config
```js
var server = new Obsidian.server(serverAddr,grantMode,clientID,clientSecret,scopeLogin);
```

Perform a login
```js
server.connect();
if(server.isValid()){
    let result = server.signIn(username,password);
    if(result.token){
        //assign token to user here
    }
}
else
    server.disconnect();
```
