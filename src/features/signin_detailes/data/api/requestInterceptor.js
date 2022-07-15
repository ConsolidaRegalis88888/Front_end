import {decodeJWT} from "./jwt";

export default function requestInterceptor(request) {
    console.log('inside requestInterceptor')
    if (request.requestHeaders.Authorization != 'Bearer unauthorized') {
        let [header, payload] = decodeJWT(request.requestHeaders.Authorization.slice(7));
        if (payload.exp) {
            if (Date.now() > payload.exp) {
                request.requestHeaders.Authorization = ''
                //TODO create token with role of anonymous;
            }
        }

    }
    return request;
}