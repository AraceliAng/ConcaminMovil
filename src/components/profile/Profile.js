import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {Container, Content, Button, H1, Card, Icon, Left, Body, Title, ListItem,Header,Right} from 'native-base';

import {Actions} from 'react-native-router-flux';


export default class Profile extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header
                    style={{ backgroundColor: 'black' }}
                    androidStatusBarColor="black"
                >
                    <Left >
                        <Button transparent onPress={()=>Actions.pop()}>
                            <Icon name='arrow-back' style={{color:'white'}} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color:'white'}}>Evento</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <StatusBar backgroundColor="black" barStyle="light-content" />
                    <Image source={{uri: 'https://i.imgur.com/rpeUYTq.jpg'}} style={styles.img}/>
                    <View style={styles.view}>
                        <View style={styles.view}>
                            <Image source={{
                                uri:'https://www.mobafire.com/images/avatars/kayn-classic.png'}} style={styles.thub}/>
                        </View>
                        <H1 style={styles.h1}>Fixter</H1>
                        <Text style={styles.text}>contacto@fixter.org</Text>
                        <View>
                            <Text style={styles.texto}>Hello World! Soy Fixter, fan de las películas y los videojuegos,
                                idealista, hacker, y este es mi hogar</Text>
                        </View>
                    </View>

                    <View>
                        <Card>
                            <ListItem>
                                <Icon name="briefcase" style={{marginRight: 10}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Intereses de Empleo</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </Card>

                        <Card>
                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 10}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Elementos Guardados</Text>
                                <Text note>Its time to build a difference . .</Text>
                                </Body>
                            </ListItem>
                        </Card>

                        <Text style={{fontWeight: 'bold'}}>Experiencia</Text>
                        <Card>
                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Backend Developer</Text>
                                <Text note>Mirak Solutions</Text>
                                <Text note>oct de 2017 -actualidad . 2 meses</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>FullStack Developer</Text>
                                <Text note>Fixter Geek</Text>
                                <Text note>oct de 2016 -actualidad . 1 mes</Text>
                                </Body>
                            </ListItem>
                        </Card>
                    </View>

                    <View>
                        <Text style={{fontWeight: 'bold'}}>Educacion</Text>
                        <Card>
                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Unidad Profesional Interdiciplinaria</Text>
                                <Text note>Ingenieria en Telematica</Text>
                                <Text note>oct de 2017 -actualidad . 2 meses</Text>
                                </Body>
                            </ListItem>

                            <ListItem>
                                <Icon name="bookmark" style={{marginRight: 20}}/>
                                <Body>
                                <Text style={{fontWeight: 'bold'}}>Unidad Profesional Interdiciplinaria</Text>
                                <Text note>Ingenieria en Mecatronica</Text>
                                <Text note>oct de 2017 -actualidad . 2 meses</Text>
                                </Body>
                            </ListItem>
                        </Card>
                    </View>

                    <Card>
                        <Text style={{margin: 20, fontWeight: 'bold'}}>Aptitudes y validaciones destacadas</Text>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>Django</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>React</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>Firebase</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={{fontWeight: 'bold'}}>2 APTITUDES MAS</Text>
                        </ListItem>
                    </Card>

                    <Card>
                        <Text style={{margin: 20, fontWeight: 'bold'}}>Contactar</Text>
                        <ListItem>
                            <Icon name="bookmark" style={{marginRight: 20}}/>
                            <Body>
                            <Text style={{fontWeight: 'bold'}}>contacto@fixter.org</Text>
                            </Body>
                        </ListItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    thub: {
        margin: 10,
        height: 100,
        width: 100, borderRadius:50
    },
    h1: {
        //marginLeft: 20,
        color: 'black',
        alignSelf: 'center'
    },
    text: {
        //marginLeft: 20,
        color: 'black',
        alignSelf: 'center'
    },
    img: {
        flex: 2,
        height: 200,
        width: null,
    },
    container: {
        backgroundColor: 'white'
    },
    view: {
        alignSelf: 'center',
        marginTop: -30,
        justifyContent:'center',
        alignItems:'center'
    },
    orden: {
        alignSelf: 'center',
        margin: 20,
        fontSize: 20
    },
    view2: {
        flexDirection: 'row'
    },
    texto: {
        margin: 10
    },
    img2: {
        height: 200, width: '100%'
    },
    color: {
        color: '#87838B'
    }
});