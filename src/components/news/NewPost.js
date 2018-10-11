import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {Header,Button,Icon,List,ListItem,Container,Content,Left,Right,Body,Thumbnail,Item,Textarea,Form,Input,CardItem,Footer,Card,Toast} from 'native-base'
import ImagePicker from 'react-native-image-picker';
import {FormNewPost} from "./FormNewPost";
import {addPost} from '../../services/postService'




    export const NewPost = ({open,close,newLink,onChange,activeLink,onSubmit,imagePost,clearImage,addLink,onImage,links})=> (

            <Modal
                animationType="slide"
                visible={open}
                onRequestClose={() => {
                    close
                }}
            >
                <Header
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={close} >
                            <Icon name='close' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right>
                        <TouchableOpacity onPress={onSubmit}>
                            <Text style={{color:'white'}}>Enviar</Text>
                        </TouchableOpacity>

                    </Right>
                </Header>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Container>

                    <Content>
                        <FormNewPost onChange={onChange} activeLink={activeLink} />
                        {activeLink ?
                            <ListItem icon noBorder>
                                <Left>

                                    <Icon  name="ios-link" />

                                </Left>
                                <Body>
                                <Input placeholder="Escribe tu link" onChangeText={value=>onChange("link",value)}/>
                                </Body>
                                <Right>
                                    <Button transparent onPress={newLink}>
                                        <Icon  name="ios-add-circle"/>
                                    </Button>
                                </Right>
                            </ListItem>
                            :
                            null

                        }


                        {imagePost ?
                            <View style={styles.imgencita}>
                                <View style={styles.iconcito}>
                                    <TouchableOpacity  onPress={clearImage}>
                                        <Icon name="ios-close-circle" style={{color:'black'}}/>
                                    </TouchableOpacity>
                                </View>
                                <Thumbnail large source={imagePost}  style={{height: 300, width: 300}}/>
                            </View>
                            :
                            null
                        }
                        {links ? links.map((link, i)=>

                            <CardItem key={i}>
                                <Icon active name="ios-link" style={{fontSize:16}} />
                                <Text note style={styles.textito}>{link}</Text>
                                <Right/>
                            </CardItem>

                        ) : null

                        }



                    </Content>
                    <List >
                        <ListItem itemDivider icon onPress={onImage}>
                            <Left>
                                <Icon active name="ios-image" />
                            </Left>
                            <Body>
                            <Text >Agregar imagen</Text>
                            </Body>
                            <Right/>

                        </ListItem>
                        <ListItem itemDivider icon onPress={addLink}>
                            <Left>
                                <Icon active name="ios-link" />
                            </Left>
                            <Body>
                            <Text >Links</Text>
                            </Body>
                            <Right/>
                        </ListItem>
                    </List>
                </Container>


            </Modal>
        )


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


