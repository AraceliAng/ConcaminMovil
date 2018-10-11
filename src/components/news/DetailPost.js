import React, {Component} from 'react';
import {StatusBar,Text,StyleSheet,Image,View,KeyboardAvoidingView} from 'react-native';
import {Container,Header,Button,Icon,CardItem,Card,Content,Left,Right,Body,Thumbnail,List,ListItem,Input,Item,Form,Spinner} from 'native-base'

import {Actions} from "react-native-router-flux";



export default class DetailPost extends Component {
state={
    post:{},
    comments:[]
}
    componentWillMount(){
        this.setState({post:this.props.p, comments:this.props.c})
    }





    render() {
        const {post,comments} = this.state;
        console.log(comments)

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
                                <Thumbnail source={{uri:post.user.profilePic}} />
                                <Body>
                                <Text>{post.user.username}</Text>
                                <Text note>{post.created_at}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>
                                {post.body}
                            </Text>
                            </Body>
                        </CardItem>
                        {post.image ?
                            <CardItem cardBody>
                                <Image source={{uri:post.image}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                            :
                            null
                        }


                        {post.links.map((link, key)=>
                            <CardItem key={key}>
                                <Icon active name="ios-link" style={{fontSize:16}} />
                                <Text note style={styles.textito}>{link}</Text>
                                <Right/>
                            </CardItem>
                        )}


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
                                <Text>{comments.length>0 ? comments.length : ""} Comments</Text>
                            </Button>
                            </Body>
                            <Right/>
                        </CardItem>
                        {comments.length > 0 ? comments.map((data, i)=>
                            <View key={i}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail small source={{uri: data.user.profilePic}} />
                                        <Body>
                                        <Text>{data.user.username}</Text>
                                        <Text note>{data.created_at}</Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                    <Text>
                                        {data.body}
                                    </Text>
                                    </Body>
                                </CardItem>
                            </View>

                            ):
                            <List>
                                <ListItem itemDivider style={{justifyContent:'center'}}>

                                    <Text >Se el primero en comentar</Text>

                                </ListItem>
                            </List>
                        }
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
                <KeyboardAvoidingView  behavior="height">
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
    textito:{
        fontSize:14,
        paddingRight:5,
    },

})
