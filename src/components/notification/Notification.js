import React, { Component } from 'react';
import {StatusBar} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Right,Button,Thumbnail,Body,List,ListItem,Icon } from 'native-base';
import {Actions} from "react-native-router-flux";
export default class Notification extends Component {

    render() {

        return (
            <Container>
                <Header
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right/>
                </Header>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Nuevas</Text>
                        </CardItem>

                            <List>
                                {[0,1,2,3].map((noti, i)=>
                                    <ListItem avatar key={i} >
                                        <Left>
                                            <Thumbnail small source={{ uri: 'https://media.comicbook.com/2018/03/yugioh-1093977-1280x0.jpeg' }} />
                                        </Left>
                                        <Body>
                                        <Text>League of leguends</Text>
                                        <Text note>Hace un momento</Text>
                                        </Body>
                                        <Right/>
                                    </ListItem>
                                )}
                            </List>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Anteriores</Text>
                        </CardItem>

                        <List>
                            {[0,1,2,3,4,5,6].map((noti,i)=>
                                <ListItem avatar key={i} >
                                    <Left>
                                        <Thumbnail small source={{ uri: 'https://media.comicbook.com/2018/03/yugioh-1093977-1280x0.jpeg' }} />
                                    </Left>
                                    <Body>
                                    <Text>League of leguends</Text>
                                    <Text note>2 h</Text>
                                    </Body>
                                    <Right/>
                                </ListItem>

                            )}
                        </List>
                    </Card>
                </Content>
            </Container>
        );
    }
}