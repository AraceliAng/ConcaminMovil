import React, {Component} from 'react';
import {View,Text,ImageBackground,StyleSheet,StatusBar} from 'react-native';
import {Container,Content,H2,H3,Header,Left,Body,Right,Title,Button,Icon,Item,Input,Card,CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import imgFondo from '../../assets/images/fondito.jpg'


export default class Recovery extends Component <Props>{
    render(){
        return(
            <ImageBackground source={imgFondo} style={styles.img}>
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

                <Content style={styles.container}>

                        <Card style={{marginTop:100}}>
                            <CardItem header>
                                <Text> ¿No recuderdas tu contraseña?</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text style={styles.textito}>
                                    Ingresa tu correo electrónico para que te podamos restablecer tu contraseña
                                </Text>
                                <Item regular style={styles.inputs} >
                                    <Input
                                        name="correo"
                                        placeholder="Correo electrónico"
                                        keyboardType='email-address'
                                        style={{color:'black'}}

                                    />
                                </Item>
                                <Button full bordered dark style={styles.inputs}>
                                    <Text>Enviar</Text>
                                </Button>
                                </Body>
                            </CardItem>
                        </Card>

                </Content>


            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        height: null,
        width: null,
        opacity:0.85
    },
    title:{

        alignItems:'center'
    },
    textito:{

        marginBottom:10,
    },
    container:{

        padding:10,

    },
    inputs:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        marginBottom:20,
        borderRadius:10
    },
});

