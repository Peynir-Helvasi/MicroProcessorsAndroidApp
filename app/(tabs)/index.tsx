import React, {useState} from 'react';
import { StyleSheet, Image, Button, TouchableOpacity, Alert, Dimensions} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {

  const [temperature, setTemperature] = useState(25); // Başlangıç sıcaklığı 20 derece olarak ayarlandı
  const [humidity, setHumidity] = useState(34);

  
  
  const increaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
    Alert.alert('Sicaklik Arttirildi', `Yeni sicaklik: ${temperature + 1}°C`);
  };

  const decreaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
    Alert.alert('Sicaklik Azaltildi', `Yeni sicaklik: ${temperature - 1}°C`);
  };

  const increaseHumidity = () => {
    setHumidity(prevHumidity => prevHumidity + 1);
    Alert.alert('Nem Arttirildi', `Yeni nem: ${humidity + 1}%`);
  };

  const decreaseHumidity = () => {
    setHumidity(prevHumidity => prevHumidity - 1);
    Alert.alert('Nem Azaltildi', `Yeni nem: ${humidity - 1}%`);
  };

  return (
    <View style = {styles.container}>
      <Image 
      style = {styles.image}
      source = {require('..//..//assets//images//images.jpg')}
      />
      
        <Text style = {[styles.text, styles.temperatureText]} >Temperature: {temperature}°C</Text> 
        
        <TouchableOpacity style = {styles.buttonContainerTemperature} onPress = {increaseTemperature}>
          <View style = {styles.buttonContent}>
          <Text style = {[styles.buttonText]}> + </Text>
          </View>
          </TouchableOpacity>
        
        <TouchableOpacity style = {styles.buttonContainerTemperature} onPress = {decreaseTemperature}>
          <View style = {styles.buttonContent}>
          <Text style = {[styles.buttonText]}> - </Text>
          </View>
          </TouchableOpacity>

          <Text style={[styles.text, styles.humidityText]} >Humidity: {humidity}%</Text>
      
      <TouchableOpacity style={styles.buttonContainerHumidity} onPress={increaseHumidity}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonContainerHumidity} onPress={decreaseHumidity}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>-</Text>
        </View>
      </TouchableOpacity>
        <View  />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: '100%',
    width: '100%',
    opacity: 0.4,
  },

  buttonContainerTemperature: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 25,
    alignSelf:'center',
    marginRight: 800,
    width: 100,
    height: 30,
  },

  buttonContainerHumidity: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 25,
    alignSelf:'center',
    marginLeft: 800,
    width: 100,
    height: 30,
  },

  buttonContent: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  },

  buttonText: {
    color: 'black',
    fontSize: 25,
    alignSelf: 'center',
  },

  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },

  temperatureText: {
    fontSize: 20,
    marginTop: 25,
    alignSelf:'center',
    marginRight: 800,
  },

  humidityText: {
    fontSize: 20,
    marginTop: 25,
    alignSelf:'center',
    marginLeft: 800,
  },
})
 ;
