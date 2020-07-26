import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Weather from './components/Weather';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="weather">
                <Stack.Screen name="weather" component={Weather} options={{
                    title: '날씨',
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