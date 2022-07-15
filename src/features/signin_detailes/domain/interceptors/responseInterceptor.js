export default function responseInterceptor(response) {
    if(response.status>=200&&response.status<300){
        return response
    }
    if(response.status==401){
        window.sessionStorage.removeItem('token');
    }

    if (response.JWT) {
        window.sessionStorage.setItem('token', response.JWT);
    }
    return response;
}