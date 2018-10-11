import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Thumbnail,Item,Textarea,Form,Input,CardItem,Footer} from 'native-base'



export const FormNewPost =({activeLink,onChange})=>(


                <KeyboardAvoidingView
                    behavior="padding"
                >

                    <Form >
                        <Textarea rowSpan={8}  placeholder="¿Qué quieres compartirnos?" onChangeText={value=>onChange("body",value)} />



                    </Form>


                </KeyboardAvoidingView>

        );



const styles = StyleSheet.create({
    frm:{
        height:5
    },
    imgencita:{
        flex:2,
        marginRight:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',

    },
    iconcito:{
        zIndex:90,
        top:-10,
        right:0,
        position:'absolute'
    }
});