import React, { Component } from 'react';
import {View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class EventContainer extends Component {
    render() {
        return (
            <Container>
                
                <Content>
                    <Card>
                        <CardItem>

                                <Body>
                                <Text>Compañia Fantástica</Text>
                                <Text note>10:00 - 17:00</Text>
                                </Body>

                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Text>
                                Insurgentes Sur 601, 11th Floor
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <View style={{flexDirection:'row'}}>
                                    <Icon active name="ios-people" />
                                    <Text>+12 Miembros</Text>
                                </View>
                            </Left>
                            <Body/>
                            <Right>
                                <Button transparent bordered dark iconLeft>
                                    <Icon active name="ios-add" />
                                    <Text>Asistire</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}