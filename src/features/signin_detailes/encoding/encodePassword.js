const CryptoJS = require("crypto-js");

export default function encodePassword(password){
    const wordArray = CryptoJS.enc.Utf8.parse(password);
    const encoded = CryptoJS.enc.Base64.stringify(wordArray);
    return encoded;
}