import request from '@/apis/request'
export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(data)
    })
}
export function register(data) { 
    return request({
        url: '/user/register',
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(data)
    })
}
export function getInfo(token) { 
    return request({
        url: '/user/info',
        method: 'get',
        headers: {
            'token': token
        }
    })
}
export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}