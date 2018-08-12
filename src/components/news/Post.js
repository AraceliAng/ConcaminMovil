import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground} from 'react-native';
import {Container,Header,Button,Icon,CardItem,Card,ListItem,Content,Left,Right,Body,Thumbnail,Card,Textarea} from 'native-base'
import {Actions} from "react-native-router-flux";



export default class Post extends Component {


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
                    <Card key={i}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'https://www.mobafire.com/images/avatars/kayn-classic.png'}} />
                                <Body>
                                <Text>Dylan Torres</Text>
                                <Text note>hace 16 días</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                //Your text here
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-kayn-reveal/es_MX/94dcc05587bfb7cf3b581917f3dd6662df5eb212/assets/downloads/kayn-soulhunter-1280x1024.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            </Body>
                            <Right/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({


});