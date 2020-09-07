/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image, AsyncStorage } from 'react-native'
import {
  Container, Header, Content, Footer, Title,
  FooterTab, Button, Text, View, DeckSwiper, Card,
  CardItem, Thumbnail, Left, Right, Body, Icon,
} from 'native-base';


export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      modified: true
    }
      ;
  }

  async componentDidMount() {
    this.setState({ items: await AsyncStorage.multiGet(await AsyncStorage.getAllKeys()) })
  }

  _getCartItems() {

   
    try {
      let items = this.state.items

      if (items === null) return
      return items.map(data => {

        let item = JSON.parse(data[1])
        return (<Text key> {item.name} </Text>)
      })
    }
    catch { }


  }


  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Cart</Title>
          </Body>
        </Header>


        <Container style={{ margin: 30 }}>
          {this._getCartItems()}
        </Container>



      </Container >
    );
  }
};