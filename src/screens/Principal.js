import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Produtos from './Produtos';


const Tab = createBottomTabNavigator();

export default function Principal() {
    return (
        <Tab.Navigator
            initialRouteName="Produtos"
            tabBarOptions={{
                activeTintColor: '#dc143c',
            }}
        >
            <Tab.Screen
                name="Produtos"
                component={Produtos}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
