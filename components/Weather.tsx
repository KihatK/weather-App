import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Weather = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const getLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            setLatitude(coords.latitude);
            setLongitude(coords.longitude);
        });
    }, []);
    
    return (
        <View style={styles.container}>
            <Text>Weather App</Text>
            <Text>위도: {latitude}</Text>
            <Text>경도: {longitude}</Text>
            <Button title="현재 위치 구하기" onPress={getLocation}/>
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
});

export default Weather;