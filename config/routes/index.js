import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {Home, Basket} from '../../Page'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MaterialBottom =  createMaterialBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
     <NavigationContainer>
            <MaterialBottom.Navigator>
                <MaterialBottom.Screen 
                name='Home' 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                    ),
                    }}
                />
            <MaterialBottom.Screen 
                name='Basket' 
                component={Basket}
                options={{
                    tabBarLabel: 'Basket',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="basket-outline" color={color} size={26} />
                    ),
                    }}
                />
                
                
            </MaterialBottom.Navigator>
     </NavigationContainer>
    )
  }
}