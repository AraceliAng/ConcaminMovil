import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Actions} from "react-native-router-flux";
import {NewsFeedComponet} from './NewsFeedComponet'
import CreatePost from "../main/CreatePost";
export default class NewsFeed extends Component {
    state={
        posts:[
            {
                id:1,
                user:{
                    id:1,
                    profilePic:'https://www.mobafire.com/images/avatars/kayn-classic.png',
                    name:'Dylan Torres'
                },
                date:'hace 3 dias',
                body:'Texto del Hola',
                image:'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/downloads/kayn-soulhunter-1280x1024.jpg',
                file:'',
                links:[],
                love:0,
                comments:0,
            },
            {
                id:2,
                user:{
                    id:2,
                    profilePic:'https://www.mobafire.com/images/champion/square/varus.png',
                    name:'Oswaldo Martinez'
                },
                date:'hace 5 dias',
                body:'Texto del post',
                image:'',
                file:'',
                links:[],
                love:2,
                comments:3,
            },
            {
                id:3,
                user:{
                    id:3,
                    profilePic:'https://www.mobafire.com/images/champion/square/annie.png',
                    name:'Mefit Hernandez'
                },
                date:'hace 5 dias',
                body:'Vean estos link',
                image:'',
                file:'',
                links:[
                    'https://www.mobafire.com/images/champion/square/varus.png',
                    'https://www.mobafire.com/images/champion/square/varus.png',
                    'https://www.mobafire.com/images/champion/square/varus.png',

                ],
                love:1,
                comments:3,
            },
        ]
    }
    render() {
            let {posts}=this.state;
        return (
                <Content>
                    <CreatePost/>
                    {posts.map((post, i)=>
                    <NewsFeedComponet
                        {...post}
                        key={i}
                    />
                    )}
                </Content>
        );
    }
}