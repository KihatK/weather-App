import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from '../App';

interface NavigationProp {
    navigation: StackNavigationProp<StackParamList, 'Weather'>,
};

const Location = ({ navigation }: NavigationProp) => {
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
            <View style={{ marginBottom: 5 }}>
                <Button title="현재 위치 구하기" onPress={getLocation}/>
            </View>
            <Button title="현재 날씨 보러가기" onPress={() => navigation.navigate('Weather')}/>
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

export default Location;