import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ScreenInicio = ( {navigation} ) =>{
  return (
      
    <View style={styles.mainContainer}>
      <View style={styles.backContainer}>
        <Text style={styles.titulo}>Iniciar Sesión</Text>        
        
        <Text style={styles.subtitulo}>Correo Electronico</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} placeholder='Correo Electronico'/>
          <Icon name="user" size={30} color="#999" /> 
        </View>

        <Text style={styles.subtitulo}>Contraseña</Text>
        <View style={styles.container}>
          <TextInput style={styles.Input} secureTextEntry={true} placeholder='Contraseña'/>
          <Icon name="key" size={30} color="#999" /> 
        </View>

        
        <Button 
          title='Iniciar Sesion' 
          color='#cb0519' 
          onPress = { () => { navigation.navigate('General') }}
          />

        <Text style={styles.textoSecundario}>¿No tienes cuenta? <Text style={{color: '#cb0519'}} onPress = { () => { navigation.navigate('Registro') }}>Registrate Aquí</Text></Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#CDCDCD'
  },
  backContainer:{
    flex:1,
    backgroundColor:'white',
    margin: 10,
    padding: 20,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10
  },
  container: {
    flexDirection:'row',
    borderColor: 'black',
    borderWidth: 1,
    height:40,
    marginBottom:20
  },
  titulo:{
    fontSize:20,
    color:'black',
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom:10
  },
  subtitulo:{
    fontSize:15,
    color:'black',
    padding:5
  },
  textoSecundario:{
    textAlign:'center',
    marginTop:10,
  },
  Input:{
    width:'90%'
  }
});

export default ScreenInicio;
