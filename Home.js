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
import { ScrollView } from 'react-native-gesture-handler';
import { AsyncStorage, Alert } from 'react-native';

let sampleGrocery = [
  { name: 'Tomato', desc: '', srcImg: require('./src/images/tomato.jpg') },
  { name: 'Cabbage', desc: '', srcImg: require('./src/images/cabbage.jpg') },
  { name: 'Eggplant', desc: '', srcImg: require('./src/images/eggplant.jpg') },
  { name: 'Garlic', desc: '', srcImg: require('./src/images/garlic.jpg') },
  { name: 'Lettuce', desc: '', srcImg: require('./src/images/lettuce.jpg') },
]

const renderItems: () => React$Node = () => {
  try {
    return sampleGrocery.map((data) => {
      return (
        <Card key={data.name} style={{ elevation: 3 }}>
          <CardItem cardBody>
            <Image style={{ height: 300, flex: 1 }} source={data.srcImg} />
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{data.name}</Text>
            <Right>
              <Button onPress={() => { addToCart(data) }}>
                <Text>Add</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      )
    })
  }
  catch {}
  
}

const addToCart: () => React$Node = async (data) => {
  Alert.alert(
    'Add to Cart',
    `Do you want to add ${data.name} to the cart?`,
    [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await AsyncStorage.setItem(
              'cart_key_' + Math.floor(Math.random() * 10000),
              JSON.stringify(data)
            );
            console.log(await AsyncStorage.multiGet(await AsyncStorage.getAllKeys()))
            Alert.alert('Done', 'Added to cart successfully!')

          } catch (error) {
            Alert.alert('Error', 'There\'s something wrong.')
          }
        }
      },
      {
        text: 'Cancel',
        style: 'cancel'
      },
    ],
    { cancelable: false }
  );
}

const Home: () => React$Node = () => {
  return (
    <Container>

      <Header>
        <Body>
          <Title> to GroceryMart</Title>
        </Body>
      </Header>

      <Container style={{ margin: 30 }}>
        <ScrollView>
          {renderItems()}

        </ScrollView>
      </Container>

    </Container >
  );
};

export default Home;