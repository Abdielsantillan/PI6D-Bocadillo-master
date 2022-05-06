import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenGeneral = ( {navigation} ) => {
  return (
      
    <View>
      <View style={styles.header}>
        <Icon name="bars" size={30} color="white" onPress = { () => { navigation.navigate('Inicio') }} />                
        <Icon name="search" size={30} color="white" />
      </View>        
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={ require('../img/imgLogo.jpg') } />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    backgroundColor: '#cb0519',
    justifyContent:'space-between',
    paddingRight:20,
    paddingBottom: 10,
    margin:15,
    borderRadius:10,
  },
  imgContainer:{
    borderColor: 'black',
    marginTop: -50,
    alignItems: 'center',
    padding: 0,
  },
  img:{
    borderRadius: 50,
    width: 100,
    height: 100
  }
});

export default ScreenGeneral;
