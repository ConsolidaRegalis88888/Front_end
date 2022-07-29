const CryptoJS = require("crypto-js");
const base64decoder = (encodedData: string) => {
    let decoded = CryptoJS.enc.Base64.parse(encodedData);
    return CryptoJS.enc.Utf8.stringify(decoded);
}