export default async function request(url, body = {}, options = {}) {
    options.headers = {'Content-Type': "application/json", ...options.headers};
    if (window.sessionStorage.getItem('token')) {
        options.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
    } else {
        options.headers.Authorization = 'Bearer unauthorized'
    }
    const res = await fetch(url, {body: body ? JSON.stringify(body) : undefined, ...options});
    return res.json();
}