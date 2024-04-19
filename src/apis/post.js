import request from '@/apis/request'
export function getAllPosts() {
    return request({
        url: '/posts/getAllPosts',
        method: 'get',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })
}