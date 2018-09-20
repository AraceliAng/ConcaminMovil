import React, { Component } from 'react';
import { Image,StatusBar } from 'react-native';
import { Container, Header, Content, Card, CardItem, Title, Text, Button, Icon, Left, Body, Right, List, ListItem } from 'native-base';
import CreatePost from "../main/CreatePost";
import FeedEvent from "./FeedEvent";
import {Actions} from "react-native-router-flux";
export default class MainEvent extends Component {
    render() {
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
                    <Title style={{color:'white'}}>Evento</Title>
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
                            <Icon active name="ios-navigate" />
                            <Text note>Insurgentes Sur</Text>
                            <Right/>
                        </CardItem>
                    </Card>

                    <CreatePost/>

                    <FeedEvent/>
                </Content>
                <StatusBar backgroundColor="black" barStyle="light-content" />
            </Container>
        );
    }
}