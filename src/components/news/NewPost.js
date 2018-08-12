import React, {Component} from 'react';
import {Modal, TouchableHighlight, View,StatusBar,Text,StyleSheet,Platform,ScrollView,ImageBackground} from 'react-native';
import {Header,Button,Icon,List,ListItem,Content,Left,Right,Body,Thumbnail,Card,Textarea} from 'native-base'



export default class NewPost extends Component {


    render() {
        return (

            <Modal
                animationType="slide"
                visible={this.props.open}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <Header
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={this.props.close} >
                            <Icon name='close' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body/>
                    <Right>
                        <Text style={{color:'white'}}>Enviar</Text>
                    </Right>
                </Header>
                <StatusBar backgroundColor="black" barStyle="light-content" />
                <Textarea rowSpan={9}  placeholder="¿Qué quieres compartirnos?" />
                <View style={styles.imgencita}>
                    <View style={styles.iconcito}>
                        <View >
                            <Icon name="ios-close-circle" style={{color:'black'}}/>
                        </View>
                    </View>

                    <Thumbnail square large source={{uri:'https://vignette.wikia.nocookie.net/crossoverrp/images/1/12/RedEyesDarknessDragon-TF04-JP-VG.jpg/revision/latest?cb=20130210214719'}} />
                </View>

                <List>
                    <ListItem itemDivider icon>
                        <Left>
                            <Icon active name="ios-image" />
                        </Left>
                        <Body>
                        <Text >Agregar imagen</Text>
                        </Body>
                        <Right/>

                    </ListItem>
                </List>

            </Modal>
        );
    }
}


const styles = StyleSheet.create({

    imgencita:{
        marginRight:10,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        position:'relative'
    },
    iconcito:{
        zIndex:90,
        top:-22,
        right:55,
        position:'absolute'
    }
});