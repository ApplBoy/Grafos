import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Header=()=>{
    return(
      <View style={{ alignItems:'center' ,backgroundColor:'rgb(255, 8, 0)', padding:10 }}>
        
   
      
      <Image style={{ width:50, height:50, borderRadius:50 }}   
source={{
  uri:'https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/67223998_1319624554880637_7326918335268913152_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rrxlTzto3wEAX8si-F-&_nc_ht=scontent-gru2-2.xx&oh=00_AT_vz6SZ5n0drPxKnrg69G-lTpN7N0JcHUmXl0FwrqI17A&oe=637539B6',


}}

  /> 
    </View> 
    );
  }

  export default Header;