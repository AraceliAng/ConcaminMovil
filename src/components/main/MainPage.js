import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,Text,Item,Input,Button,Icon,List,ListItem,Left,Body,Right,Thumbnail} from 'native-base';
import {StatusBar,StyleSheet,View} from 'react-native'
import NewsFeed from "../news/NewsFeed";
import NewPost from "../news/NewPost";
class MainPage extends Component {
    state={
        newPost:false
    }


    openNewPost=()=>{
        let {newPost}=this.state;
        newPost =! newPost
        this.setState({newPost})
    }
    render() {
        return (
            <Container>

                <Header
                    searchBar
                    rounded
                    hasTabs={true}
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Button  transparent>
                        <Icon name='ios-contact' style={{color:'white'}} />
                    </Button>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Icon name="ios-notifications" style={{color:'white'}}/>
                    </Button>
                </Header>


                <Tabs
                      tabBarUnderlineStyle={ { backgroundColor: '#ffffff' }}
                >
                    <Tab
                        heading="Noticias"
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}
                        
                    >
                        <View style={styles.caja}>
                            <List >
                                <ListItem avatar onPress={this.openNewPost}>
                                    <Left>
                                        <Thumbnail small source={{ uri: 'https://www.mobafire.com/images/avatars/kayn-classic.png' }} />
                                    </Left>
                                    <Body>
                                    <Text note>¿Qué nos quieres compartir?</Text>
                                    </Body>
                                    <Right/>
                                </ListItem>
                            </List>
                        </View>
                        <NewPost open={this.state.newPost} close={this.openNewPost}/>


                        <NewsFeed/>
                    </Tab>

                    <Tab
                        heading="Grupos"
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                        <Text>Hola 3</Text>

                    </Tab>
                    <Tab
                        heading="Eventos"
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                        <Text>Hola 3</Text>

                    </Tab>
                </Tabs>


                  <StatusBar backgroundColor="black" barStyle="light-content" />
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    caja:{
        padding:10,

        borderRadius: 4,
        borderBottomWidth: 4,
        borderColor: '#d6d7da',
    }

})
export default MainPage;