import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { colors } from '../utils/colors';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import io from 'socket.io-client';
import axios from 'axios';

type MapObject = {
  latitude?: any;
  longitude?: any;
};
export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [carLocation, setCarLocation] = useState(null);
  const [mapView, setMapView] = useState<MapObject>({});
  //initializing the socket
  useEffect(() => {
    // use socket to update location every 2 seconds
    const socket = io('http://10.0.0.14:5000', {
      transports: ['websocket']
    });
    socket.on('message', (data: any) => {
      setCarLocation({
        latitude: data.field1,
        longitude: data.field2
      });
    });

    // get location of car from backend
    (async () => {
      try {
        const { data } = await axios.get('http://10.0.0.14:5000/get-location');
        console.log(data);
        setMapView({
          latitude: parseFloat(data.data.field1),
          longitude: parseFloat(data.data.field2)
        });
      } catch (error) {}
    })();

    // request location permission
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords.longitude);
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {location !== null ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.0005
          }}
        >
          <Marker
            title='Me'
            pinColor='gold'
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            }}
          />
          {carLocation !== null ? (
            <Marker
              title='My Car'
              pinColor='green'
              coordinate={{
                latitude: parseFloat(carLocation.latitude),
                longitude: parseFloat(carLocation.longitude)
              }}
            />
          ) : (
            <Text></Text>
          )}

          <Marker
            title='Choose Destination'
            pinColor='teal'
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            draggable={true}
          />
        </MapView>
      ) : (
        <Text></Text>
      )}

      <Text>{text}</Text>
    </View>
  );
}

const { background } = colors;
const styles = StyleSheet.create({
  container: {
    backgroundColor: background,
    flex: 1,
    padding: 5
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
