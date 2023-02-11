import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert, Button, KeyboardAvoidingView, StyleSheet,
  Text, TextInput, View
} from 'react-native';
import Greeting from './src/components/Greeting';
import PhotoImg from './src/components/PhotoImg';
import MainScreen from './src/screens/MainScreen';
import SubScreen from './src/screens/SubScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [count, setCount] = useState(0)
  const [test, setTest] = useState("")
  const [ontext, setOntext] = useState("")
    const increment = () => {
      setCount(count + 1)
    }
  
  const _handleTextChange = ( inputValue: any)  => {
    setTest( inputValue );
  };

  const pushtext = () => {
    setOntext(test);
  }

  return (
    
    <View style={styles.container}>

      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Sub" component={SubScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      
      <Text style={styles.textStyle}>akaaaaaan</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Greeting />

      <Text
        style={styles.textStyle}
        onPress={increment}
      >いいね！：{count}</Text>

      <PhotoImg />
      <KeyboardAvoidingView
        behavior="padding"
        >
      <TextInput
          value={test}
          onChangeText={_handleTextChange}
        style={{
          width: 200, height: 44, padding: 8,margin:8, backgroundColor: '#000000', color:'#fff'}}
        />
        <Button 
          title="送信"
        onPress={pushtext} />
        <Text style={styles.textStyle}>{ontext}</Text>
        </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 50,
    color:'#000'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

