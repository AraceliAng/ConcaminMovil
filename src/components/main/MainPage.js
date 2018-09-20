import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,Text,Item,Input,Button,Icon,List,ListItem,Left,Body,Right,Thumbnail} from 'native-base';
import {StatusBar,StyleSheet,View} from 'react-native'
import NewsFeed from "../news/NewsFeed";
import NewPost from "../news/NewPost";
import GroupsMain from "../groups/GroupsMain";
import EventContainer from "../events/EventContainer";
import CreatePost from "./CreatePost";
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

                        <NewsFeed/>
                    </Tab>

                    <Tab
                        heading="Grupos"
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                       <GroupsMain/>

                    </Tab>
                    <Tab
                        heading="Eventos"
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                        <EventContainer/>

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