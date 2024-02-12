import { View, Text, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import {Home} from '../../Page'




const Splash = () => {

const nav = useNavigation()
const {height, width} = Dimensions.get('window');

useEffect(() => {
    setTimeout(() => {
        nav.navigate(Home)
    }, 2000)
},[])


  return (
    <View style={{backgroundColor:myColor.primary, flex:1, justifyContent:'center'}}>
        <StatusBar style='light'/>
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        width: '100%'

    }}>
        <Image style={{height:150, width: width}} source={require('../../assets/images/logoGrab.png')}/>
 
    </View>


    </View>
  )
}

export default Splash