import React, { useEffect, useState, useContext } from 'react'
import { myColor } from '../../Utils/MyColors'
import { StatusBar } from 'expo-status-bar'
import imgBanner from '../../assets/images/headerBackground.jpg'
import { useIsFocused, useNavigation  } from '@react-navigation/native';
import {
    StyleSheet,
    View,
    ImageBackground,
    Dimensions,
    Text,
    ScrollView,
    TextInput,
    TouchableHighlight
} from 'react-native'

import { GlobalContext } from '../../config/globalContext'
import * as controller from './Controller/BasketController';

const { height, width } = Dimensions.get('window');

const Basket = () => {

    const [number, setNumber] = useState('');
    const [totalOrder, setTotalOrder] = useState(0);

    const isFocused = useIsFocused();

    const nav = useNavigation()


    const {
        dataOrderlist,
        setDataOrderlist,
        getRestClient
    } = useContext(GlobalContext);

    

    const getState = () => {
        return {
            dataOrderlist,
            getRestClient,
            number,
            setNumber,
            totalOrder,
            setTotalOrder,
            nav,
            setDataOrderlist
        }
    }

    useEffect(() => {
        if (isFocused) {
                let total = dataOrderlist && dataOrderlist.reduce((accumulator, object) => {
                    return accumulator + (object.harga * object.qty);
                }, 0);

                setTotalOrder(total)
       
            console.log
        }

    }, [isFocused])


    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle='dark-content' translucent backgroundColor='rgba(0,0,0,0)' />
            <ImageBackground style={styles.backgroundImage} resizeMode="cover" source={imgBanner}>
                <View style={styles.wraperContent}>

                    <View style={styles.layoutFiture}>
                        <Text style={styles.titleText}> Detail Order </Text>
                        <View style={styles.garisHeader}></View>

                        <Text style={styles.label}> Table Number : </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNumber}
                            value={number}
                            placeholder="Entry Table Number"
                            keyboardType="numeric"
                        />

                        <Text style={styles.label}> List Order : </Text>

                        {isFocused ? dataOrderlist && dataOrderlist.map((item, i) => (
                            <View style={styles.wraperListOrder} key={i}>
                                <Text style={styles.label}>- {item.nameOrder} </Text>
                                <Text style={styles.label}>{item.qty}x =</Text>
                                <Text style={styles.label}>Rp.{item.harga * item.qty}</Text>
                            </View>
                        )) : null}

                        <View>

                            <View style={styles.garisHeader}></View>

                            <View style={styles.wraperListOrder}>
                                <Text style={styles.label}> Total </Text>
                                <Text style={styles.label}> = </Text>
                                <Text style={styles.label}>Rp.{totalOrder}</Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <TouchableHighlight
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={()=>controller.handleProsesOrder(getState())}>

                                    <View style={styles.buttonOrder}>
                                        <Text> Order </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                        </View>



                    </View>


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
        fontWeight: 'bold',
        position: 'absolute',
        alignSelf: 'center',
        color: '#FFFF',
        top: 70

    },

    titleText: {
        fontSize: 24,
        fontWeight: 'bold',

    },

    subTitleText: {
        fontSize: 16,
        fontWeight: 'reguler',
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
    garisHeader: {
        height: .8,
        backgroundColor: '#adadad',
        marginTop: 10,
        top: 10,
        color: '#383838'
    },
    layoutFiture: {
        marginHorizontal: 30,
        marginVertical: 15,

    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    label: {
        fontSize: 16,
        marginHorizontal: 10,
        marginTop: 15,
        top: 5,
    },

    wraperListOrder: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttonOrder: {
        alignItems: 'center',
        backgroundColor: '#63a819',
        borderRadius: 10,
        padding: 10,
        // marginTop: 15,
        // top: 5,
    }
});


export default Basket