import React, {Component} from 'react';
import {StatusBar,Text,StyleSheet,Image,View,KeyboardAvoidingView} from 'react-native';
import {Container,Header,Button,Icon,CardItem,Card,Content,Left,Right,Body,Thumbnail,List,ListItem,Input,Item,Form} from 'native-base'
import {Actions} from "react-native-router-flux";



export default class DetailPost extends Component {


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
                        <CardItem bordered>
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
                        {[0,1,2,3].map((data, i)=>
                            <View key={i}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail small source={{uri: 'https://www.mobafire.com/images/champion/square/varus.png'}} />
                                        <Body>
                                        <Text>Oswaldo Martinez</Text>
                                        <Text note>hace 16 días</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        //Your text here
                                    </Text>
                                    </Body>
                                </CardItem>
                            </View>

                            )}
                        <List>
                            <ListItem itemDivider style={{justifyContent:'center'}}>

                                <Text >Me gusta</Text>

                            </ListItem>
                        </List>
                        {[0,1,2,3].map((data, i)=>
                            <View key={i}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail small source={{uri: 'https://www.mobafire.com/images/champion/square/varus.png'}} />
                                        <Body>
                                        <Text>Oswaldo Martinez</Text>
                                        </Body>
                                    </Left>
                                </CardItem>

                            </View>

                        )}
                    </Card>

                </Content>
                <KeyboardAvoidingView  behavior="padding">
                    <Form style={{flexDirection:'row', justifyContent:'space-around',backgroundColor:'rgb(244,244,244)',alignItems:'center'}}>
                        <Item regular style={styles.inputs}>
                            <Input placeholder="Comenta sobre esta publicación" style={{fontSize:12}} />
                        </Item>
                        <Button transparent dark>
                            <Text style={{fontSize:12}} >PUBLICAR</Text>
                        </Button>

                    </Form>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        padding:20
    },
    inputs:{
        width:'75%',
        height:35,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        borderRadius:10
    },

})
