import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class GroupsMain extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>League of leguends</Text>
                            <Right>
                                <Text note>+4567</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}