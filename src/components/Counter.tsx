import React, { Component, useState } from 'react';
import { Text } from 'react-native';

export default class Counter extends Component {
  render() {
  
    const [count, setCount] = useState(0)
  
    const increment = () => {
      setCount(count + 1)
    }

    return (
      
      <Text onPress={increment}>いいね！：{count}</Text>

      
    );
  }
}

