import {retrieveToken} from "./userService";
import {AsyncStorage} from 'react-native'
//const baseUrl = 'http://localhost:3000/comments/';
//const baseUrl = 'https://concamin.herokuapp.com/comments/';
const baseUrl = 'https://murmuring-beach-52120.herokuapp.com/comments/'

export function addComment(comment){

    return fetch(baseUrl, {
        method:'post',
        body:JSON.stringify(comment),
        //credentials:'include',
        headers:{
            "Authorization": retrieveToken(),
            "Content-Type": "application/json"
        }
    })
        .then(res=>{
            if(!res.ok){
                console.log(res);
                return Promise.reject(res.json())
            }
            return res.json();
        })
        .then(item=>{
            return item;
        })
}

export async function getPostComments(postId, skip=0){
    const token = await AsyncStorage.getItem('token')
    return fetch(baseUrl + `?post=${postId}&skip=${skip}`, {
        method:'get',
        headers:{
            'Authorization': token
        }
    })
        .then(res=>{
            if(!res.ok){
                console.log(res)
                return Promise.reject(res.json())
            }
            return res.json()
        })
        .then(comments=>{
            return comments;
        })

}


export function editComment(comment){

}


export function deleteComment(cId){
    return fetch(baseUrl+cId, {
        method:'DELETE',
        headers:{
            'Authorization': retrieveToken()
        }
    }).then(res=>{
        if(!res.ok){
            console.log(res)
            return Promise.reject(res.json())
        }
        return res.json()
    }).then(item=>{
        return item
    })
}