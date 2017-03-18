'use strict';

const fetch = require('node-fetch');

export async function postData(uri, data) {
    JSON.stringify(data);
    const res = await fetch(uri, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }});
    return res.json();
}
export async function getToken(url) {
    var request = await fetch(url);
    return request.json();
}