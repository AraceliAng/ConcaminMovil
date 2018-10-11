import React, { Component } from 'react';
import {Image, StyleSheet} from 'react-native';
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Actions} from "react-native-router-flux";
import IMG from '../../assets/images/fondito.jpg'


export  const NewsFeedComponet = ({id,user,created_at,body,newImage,love,comments,links,image,p,goDetail})=>(
    <Card >
        <CardItem >
            <Left>
                <Thumbnail source={{uri:newImage}} />
                <Body>
                <Text>{user.username}</Text>
                <Text note>{created_at}</Text>
                </Body>
            </Left>
        </CardItem>
        <CardItem>
            <Body>
            <Text onPress={()=>goDetail(p)}>
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



        <CardItem button onPress={()=>goDetail(p)}>
            <Left>

                    <Icon active name="thumbs-up" />
                    <Text>{love < 1 ? "": love } Likes</Text>
            </Left>
            <Body style={{flexDirection:'row'}}>
                <Icon active name="chatbubbles" style={{marginRight:5}} />
                <Text>{comments < 1 ? "": comments.length} Comentarios</Text>
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