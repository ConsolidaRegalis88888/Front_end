export default async function request(url, body = {}, options = {}) {
    options.headers = {'Content-Type': "application/json", ...options.headers};
    options.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token');
    const res = await fetch(url, {body: body ? JSON.stringify(body) : undefined, ...options});
    return res.json();
}