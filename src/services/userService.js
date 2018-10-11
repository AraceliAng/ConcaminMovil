
const baseUrl = 'https://murmuring-beach-52120.herokuapp.com/auth/'
import { AsyncStorage } from "react-native"




export function deleteSkill(skill){
    return fetch(baseUrl + 'skills/' + skill._id, {
        method:'DELETE',
        headers:{
            'Authorization': _retrieveData(),
            "Content-Type": "application/json"
        }
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(skill=>{
            return skill;
        });
}

export function getSkills(user){
    return fetch(baseUrl + 'skills/' + user._id, {
        headers:{
            'Authorization': _retrieveData()
        }
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(skills=>{
            return skills;
        });
}

export function saveSkill(skill){
    console.log(skill)
    return fetch(baseUrl + 'skills/', {
        method:'post',
        body: JSON.stringify(skill),
        headers:{
            'Authorization': _retrieveData(),
            "Content-Type": "application/json"
        }
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(skill=>{
            return skill;
        });
}




export function getPublicUser(id){
    return fetch(baseUrl + 'users/' + id, {
        headers:{
            'Authorization': _retrieveData()
        }
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(user=>{
            return user;
        });
}

export function updateUser(user){
    const form = new FormData();
    for(let key in user){
        form.append(key, user[key]);
    }
    return fetch(baseUrl + 'profile', {
        method:'post',
        body:form,
        headers:{
            "Authorization": _retrieveData(),
            //"Content-Type" : "application/json"
        }

    })
        .then(res=>{
            console.log(res)
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(user=>{
            AsyncStorage.setItem('user', JSON.stringify(user))
            return user;
        });
}

export function getLoggedUser(){
    //return fetch(baseUrl + 'logged',{credentials:'include'})
    return fetch(baseUrl + 'logged',{
        headers:{
            'Authorization': _retrieveData()
        }
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(user=>{
            console.log(user);
            AsyncStorage.setItem('user', JSON.stringify(user))
            return user;
        });
}

export function login(auth){
    return fetch(baseUrl + 'login',{
        method:'post',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(auth),
        //credentials:'include'
    })
        .then(res=>{
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(data=>{
            console.log(data);
            saveUser(data);
            return data.user;
        });
}


export function signup(user){
    return fetch(baseUrl + 'signup',{
        method:'post',
        headers:{
            "Content-Type":"application/json",
            "Authorization":JSON.stringify(retrieveToken())
        },
        body:JSON.stringify(user),
        //credentials:'include'
    })
        .then(res=>{
            console.log(res)
            if(!res.ok) return Promise.reject(res);
            return res.json();
        })
        .then(data=>{
            //console.log(data.user);
            saveUser(data);
            return data.user;
        });
}

export const saveUser = (data)=>{
    AsyncStorage.setItem('token', data.access_token)
    AsyncStorage.setItem('user', JSON.stringify(data.user))
}

export const retrieveToken = ()=>{
    return AsyncStorage.getItem('token');
}

export const _retrieveData = async () => {
    try {
          const token = await AsyncStorage.getItem('token')
        return token
    } catch (error) {
        // Error retrieving data
    }
}


