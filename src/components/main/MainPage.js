import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs ,Text,Item,Input,Button,Icon,TabHeading,ListItem,Left,Body,Right,Thumbnail} from 'native-base';
import {StatusBar,StyleSheet,View,Platform} from 'react-native'
import NewsFeed from "../news/NewsFeed";
import GroupsMain from "../groups/GroupsMain";
import EventContainer from "../events/EventContainer";
import {Actions} from 'react-native-router-flux';
import Notification from "../notification/Notification";
class MainPage extends Component {


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
                    <Button  transparent onPress={()=>Actions.profile()}>
                        <Icon name='ios-contact' style={{color:'white'}} />
                    </Button>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Buscar" />
                        {Platform.OS === "android" ?
                            <Icon name='ios-contact' onPress={()=>Actions.profile()} />
                            :null
                        }


                    </Item>
                </Header>


                <Tabs
                      tabBarUnderlineStyle={ { backgroundColor: '#ffffff' }}
                >
                    <Tab
                        heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="md-paper" /></TabHeading>}
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >

                        <NewsFeed
                            tipo={"PERSONAL"}
                        />
                    </Tab>

                    <Tab
                        heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="ios-contacts" /></TabHeading>}
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                       <GroupsMain/>

                    </Tab>
                    <Tab
                        heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="ios-calendar" /></TabHeading>}
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                        <EventContainer/>

                    </Tab>
                    <Tab
                        heading={ <TabHeading style={{backgroundColor:'black'}}><Icon name="ios-notifications" /></TabHeading>}
                        tabStyle={{backgroundColor:'black'}}
                        activeTabStyle={{backgroundColor:'black'}}
                        activeTextStyle={{color:'white'}}

                    >
                        <Notification/>

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