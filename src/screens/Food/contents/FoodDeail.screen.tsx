/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Dimensions, Image, SafeAreaView, Text} from 'react-native';
import {Body, Container, QuickView} from '@src/components';
const {width, height} = Dimensions.get('window');

interface Props {
  route: any;
}
export class FoodDeailScreen extends Component {
  render() {
    const {route} = this.props;
    return (
      <Container>
        <QuickView>
          <Image
            style={{
              width: width,
              height: 280,
            }}
            source={{uri: route.params.image}}
          />
        </QuickView>
        <Body type="full-view" scroll marginTop={-30} borderRadius={20}>
          <QuickView paddingHorizontal={20} marginVertical={20}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>
              {route.params.name}
            </Text>
            <QuickView marginTop={20}>
              <Text
                style={{marginBottom: 10, fontSize: 14, fontWeight: 'bold'}}>
                Ingredients
              </Text>
              {route.params.ingredients.map((e: any) => {
                return <Text style={{marginBottom: 5}}> - {e.name}</Text>;
              })}
            </QuickView>
            <QuickView marginTop={10}>
              <Text
                style={{marginBottom: 10, fontSize: 14, fontWeight: 'bold'}}>
                Instructions
              </Text>
              <QuickView
                padding={10}
                backgroundColor="#f2f2f2"
                marginVertical={5}>
                <Text style={{marginBottom: 5}}>
                  {' '}
                  - Cut corn kernels from most of the cobs. Deseed bell pepper,
                  halve chili, and chop the onion. Peel cucumber and chop.
                </Text>
              </QuickView>
              <QuickView
                padding={10}
                backgroundColor="#f2f2f2"
                marginVertical={5}>
                <Text style={{marginBottom: 5}}>
                  {' '}
                  - Add chopped vegetables, garlic, most of the yellow tomatoes,
                  olive oil, white wine vinegar, and water to a blender, season
                  with salt and pepper, and blend until smooth. Refrigerate the
                  soup for approx. 1 hr.
                </Text>
              </QuickView>

              <QuickView
                padding={10}
                backgroundColor="#f2f2f2"
                marginVertical={5}>
                <Text style={{marginBottom: 5}}>
                  {' '}
                  - Cut corn kernels from remaining cob and halve yellow
                  tomatoes for serving. Serve gazpacho in bowls with corn,
                  tomatoes, fresh basil leaves, and croutons. Drizzle with
                  yogurt and olive oil. Enjoy!
                </Text>
              </QuickView>
            </QuickView>
          </QuickView>
        </Body>
      </Container>
    );
  }
}

export default FoodDeailScreen;
