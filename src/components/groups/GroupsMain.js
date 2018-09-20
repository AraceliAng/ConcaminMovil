import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Left, Right,Button,Thumbnail,Body,List,ListItem,Icon } from 'native-base';
import {Actions} from "react-native-router-flux";
export default class GroupsMain extends Component {
    state={
        groups:true
    }
    render() {
        let {groups}=this.state
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Mis grupos</Text>
                        </CardItem>
                        { groups ?
                            <List>
                                <ListItem avatar onPress={()=>Actions.groupDetail()}>
                                    <Left>
                                        <Thumbnail small source={{ uri: 'https://media.comicbook.com/2018/03/yugioh-1093977-1280x0.jpeg' }} />
                                    </Left>
                                    <Body>
                                    <Text>League of leguends</Text>
                                    <Text note>+4567 Miembros</Text>
                                    </Body>
                                    <Right>

                                        <Icon  name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            </List>
                            :
                            <CardItem>
                                <Body>
                                <Text>
                                    Aqui estarán tus grupos, cuando te inviten a uno
                                </Text>
                                </Body>
                            </CardItem>

                        }


                    </Card>
                </Content>
            </Container>
        );
    }
}