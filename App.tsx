import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Location from './components/Location';
import Weather from './components/Weather';

export type StackParamList = {
    Location: undefined,
    Weather: undefined,
};

const Stack = createStackNavigator<StackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Location">
                <Stack.Screen name="Location" component={Location} options={{
                    title: '위치 잘 구해지는지 확인',
                    headerStyle: { backgroundColor: 'skyblue' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
                <Stack.Screen name="Weather" component={Weather} options={{
                    title: '현재 날씨',
                    headerStyle: { backgroundColor: 'skyblue' },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;