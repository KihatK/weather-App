import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import { WEATHER_KEY } from '../env';

const Weather = () => {
    const [weather ,setWeather] = useState('');
    const [description, setDescription] = useState('');
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [imagesrc, setImagesrc] = useState('https://kihat-blog.s3.amazonaws.com/original/K.png');

    const getWeather = useCallback((latitude, longitude) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=kr&appid=${WEATHER_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setWeather(json.weather[0].main);
                setDescription(json.weather[0].description);
                setTemp(json.main.temp - 273.15);
                setHumidity(json.main.humidity);
                setImagesrc(`http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`);
            });
    }, []);

    const getLocation = useCallback(() => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const latitude = coords.latitude;
            const longitude = coords.longitude;
            getWeather(latitude, longitude);
        });
    }, []);

    return (
        <View style={styles.containers}>
            <Image style={{ width: 150, height: 150 }} source={{ uri: imagesrc }}/>
            <Text>현재 날씨: {weather}</Text>
            <Text>상세 날씨: {description}</Text>
            <Text>현재 온도: {temp}</Text>
            <Text>현재 습도: {humidity}</Text>
            <Button title="날씨 확인하기" onPress={getLocation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Weather;