import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Actions} from "react-native-router-flux";


export  const NewsFeedComponet = ({id,user,date,body,image,love,comments,links})=>(
    <Card >
        <CardItem >
            <Left>
                <Thumbnail source={{uri:user.profilePic}} />
                <Body>
                <Text>{user.name}</Text>
                <Text note>{date}</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Body>
            <Text onPress={()=>Actions.detail()}>
                {body}
            </Text>
            </Body>
        </CardItem>
        {image ?
            <CardItem cardBody>
                <Image source={{uri:image}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            :
            null
        }


        {links.map((link, key)=>
                <CardItem key={key}>
                    <Icon active name="ios-link" style={{fontSize:16}} />
                    <Text note style={styles.textito}>{link}</Text>
                    <Right/>
                </CardItem>
            )}



        <CardItem >
            <Left>
                <Button transparent onPress={()=>Actions.detail()}>
                    <Icon active name="thumbs-up" />
                    <Text>{love < 1 ? "": love } Likes</Text>
                </Button>
            </Left>
            <Body>
            <Button transparent onPress={()=>Actions.detail()}>
                <Icon active name="chatbubbles" />
                <Text>{comments < 1 ? "":comments} Comments</Text>
            </Button>
            </Body>
            <Right/>
        </CardItem>
    </Card>
)

const styles = StyleSheet.create({

    textito:{
        fontSize:14,
        paddingRight:5,
    },
});