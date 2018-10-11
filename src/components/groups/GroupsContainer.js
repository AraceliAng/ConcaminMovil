import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Title, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import CreatePost from "../main/CreatePost";
import {NewsFeedComponet} from '../news/NewsFeedComponet'
import {Actions} from "react-native-router-flux";
import NewsFeed from "../news/NewsFeed";
export default class GroupsContainer extends Component {
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
            <Container>
                <Header
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Left>
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color:'white'}}>Grupo</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://media.comicbook.com/2018/03/yugioh-1093977-1280x0.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Compañia Fantástica</Text>
                            <Text note>10:00 - 17:00</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Icon active name="ios-clock" />
                            <Text note>Martes 24 de febrero</Text>
                            <Right/>
                        </CardItem>
                        <CardItem>
                            <Icon active name="ios-pin" />
                            <Text note>Insurgentes Sur</Text>
                            <Right/>
                        </CardItem>
                    </Card>

                    <NewsFeed
                        tipo = "GROUP"
                    />

                </Content>
                <StatusBar backgroundColor="black" barStyle="light-content" />
            </Container>
        );
    }
}