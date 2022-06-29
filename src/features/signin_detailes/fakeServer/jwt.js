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

    return signedToken;
}