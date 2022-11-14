import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {WebView} from 'react-native-webview';
const  Body = () =>{
    return(
      <View style={{flex:1}}>
<StatusBar />
 <WebView source={{
uri: 'https://www.kabum.com.br/'
 }}/>
  </View>



  
    );
  }
 

  export default  Body;