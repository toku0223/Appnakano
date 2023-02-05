import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
 
export default class PhotoImg extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.photo}
          source={{uri: 'https://picsum.photos/id/1035/367/267'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width: 256,
    height: 128,
  },
});