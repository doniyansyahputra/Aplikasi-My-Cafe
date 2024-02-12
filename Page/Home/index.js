import React, { useEffect, useState, useContext } from 'react'
import { myColor } from '../../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import imgBanner from '../../assets/images/headerBackground.jpg'
import MenuItems from '../../Components/MenuItems'
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Text,
    ScrollView
} from 'react-native'

import { useIsFocused } from '@react-navigation/native';
import { GlobalContext } from '../../config/globalContext'
import * as controller from './Controller/HomeController';

const { height, width } = Dimensions.get('window');

const Home = () => {

    const [dataMenu, setDataMenu] = useState([])
    const isFocused = useIsFocused();

    const {
        dataOrderlist,
        setDataOrderlist,
        getRestClient
    } = useContext(GlobalContext);

    const getState = () => {
        return {
            dataOrderlist,
            setDataOrderlist,
            setDataMenu,
            getRestClient
        }
    }

    useEffect(() => {
        if (isFocused) {
            controller.callApiGetListMenu(getState());
        }

    }, [isFocused])

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle='dark-content' translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={imgBanner}>
                <Text style={styles.greetingText}>Welcome to MyCafe </Text>
                <View style={styles.wraperContent}>

                    <View style={styles.layoutFiture}>
                        <Text style={styles.titleText}>List Menu</Text>
                        <Text style={styles.subTitleText}>Find your favorite menu in here!</Text>
                    </View>

                    <MenuItems
                        data={dataMenu}
                        handleAddOrder={(data) => controller.handleAddOrder(getState(), data)}
                    />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    greetingText: {
        fontSize: 20,
        position: 'absolute',
        alignSelf: 'center',
        color: '#FFFF',
        top: 70

    },

    titleText: {
        fontSize: 24,

    },

    subTitleText: {
        fontSize: 16,
        marginVertical: 7

    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },

    wraperContent: {
        marginTop: 150,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    layoutFiture: {
        marginHorizontal: 30,
        marginVertical: 15,

    }
});


export default Home