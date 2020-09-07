/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from 'react-native'
import {
  Container, Header, Content, Footer, Title,
  FooterTab, Button, Text, View, DeckSwiper, Card,
  CardItem, Thumbnail, Left, Right, Body, Icon,
} from 'native-base';


const Profile: () => React$Node = () => {
  return (
    <Container>

      <Header>
        <Body>
          <Title>My Profile</Title>
        </Body>
      </Header>

      <Content>
        <Container style={{ margin: 30 }}>
         <Text>Hi, Guest!</Text>
        </Container>
      </Content>


    </Container >
  );
};

export default Profile;