const CryptoJS = require("crypto-js");

function base64(source) {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    return encodedSource;
}

export function createJWT(header, payload, secret) {

    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = base64(stringifiedHeader);

    let stringifiedPayload = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    let encodedPayload = base64(stringifiedPayload);

    let unsighedToken = encodedHeader + "." + encodedPayload;

    let signature = CryptoJS.HmacSHA256(unsighedToken, secret);
    signature = base64(signature);

    let signedToken = unsighedToken + "." + signature;
    console.log(signedToken);
    return signedToken;
}

export function decodeJWT(JWT) {
    console.log('inside decodeJWT function')
    let [header, payload, secret] = JWT.split('.');
    console.log(header)
    console.log(payload)
    let head = CryptoJS.enc.Base64.parse(header);
    let headerString = CryptoJS.enc.Utf8.stringify(head);
    let pay = CryptoJS.enc.Base64.parse(payload);
    let payloadString = CryptoJS.enc.Utf8.stringify(pay);
    let headerObject = JSON.parse(headerString);
    let payloadObject = JSON.parse(payloadString);
    return [headerObject, payloadObject];
}