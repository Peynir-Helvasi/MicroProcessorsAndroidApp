import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Alert, Dimensions } from "react-native";
import { Text, View } from "@/components/Themed";

//const windowWidth = Dimensions.get("window").width;

export default function TabOneScreen() {
  const [temperature, setTemperature] = useState(25);
  const [humidity, setHumidity] = useState(30);


  const increaseTemperature = () => {
    setTemperature((prevTemperature) => {
      if(prevTemperature < 35){
        Alert.alert("Sicaklik Arttirildi", `Yeni sicaklik: ${temperature + 1}°C`);
        return prevTemperature + 1 ;
      }
      else{
        Alert.alert("Sicaklik Arttirilmadi", `Sicaklik 35 dereceyi gecemez`);
        return prevTemperature;
      }

    });
     
  };

  const decreaseTemperature = () => {
    setTemperature((prevTemperature) => {if(prevTemperature > -1){
      return prevTemperature - 1 ;
    }
      else{
      Alert.alert("Sicaklik Arttirilmadi", `Sicaklik -5 dereceyi gecemez`);
      return prevTemperature;
      }
  });
    Alert.alert("Sicaklik Azaltildi", `Yeni sicaklik: ${temperature - 1}°C`);
  };

  const increaseHumidity = () => {
    setHumidity((prevHumidity) => {
      if(prevHumidity < 50){
      Alert.alert("Nem Arttirildi", `Yeni Nem: ${humidity + 2}°C`);
      return prevHumidity + 2 ;
    }
    else{
      Alert.alert("Nem  Arttirilmadi", `Nem yüzde 50'yi gecemez`);
      return prevHumidity;
    }
  });
  };

  const decreaseHumidity = () => {
    setHumidity((prevHumidity) => {
      if(prevHumidity > 0){
      Alert.alert("Nem azaltildi", `Yeni Nem: ${humidity - 2}°C`);
      return prevHumidity - 2 ;
    }
    else{
      Alert.alert("Nem  azaltilamadi", `Nem yüzde 0'i gecemez`);
      return prevHumidity;
    }});
  };

  return (
    <View style={styles.container}>
    {/*  <Text style={styles.text}>Current Temperature: {currentTemperature} °C</Text>
     <Text style={styles.text}>Current Humidity: {currentHumidity} %</Text> */}
      <Image style={styles.image} source={require("..//..//assets//images//images.jpg")} />
      <View style={styles.area}>
        <Text style={[styles.textTemperature, styles.temperatureText]}>
          Temperature: {temperature}°C
        </Text>
        <TouchableOpacity style={styles.button} onPress={increaseTemperature}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}> + </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseTemperature}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}> - </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.area}>
        <Text style={[styles.textHumidity, styles.humidityText]}>
          Humidity: {humidity}%
        </Text>
        <TouchableOpacity style={styles.button} onPress={increaseHumidity}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}> + </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseHumidity}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}> - </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  
  area: {
    backgroundColor:"transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: "100%",
    width: "100%",
    opacity: 0.4,
  },

  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 1,
    marginTop: 15,
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start" //butonları sağa kaydırdık
  },

  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },

  buttonText: {
    color: "black",
    fontSize: 25,
  },

  textTemperature: {
    color: "black",
    //fontSize: 15,
    fontWeight: "bold",
    marginRight: 190,
  },

  textHumidity: {
    color: "black",
    //fontSize: 15,
    fontWeight: "bold",
    marginRight: 215,
  },

  temperatureText: {
    fontSize: 20, 
  },

  humidityText: {
    fontSize: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf:"flex-end",
  }
});
