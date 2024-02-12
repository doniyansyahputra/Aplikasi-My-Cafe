import React, { useEffect, useState } from "react";
import { TouchableHighlight, View, Image, Text, StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window')
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const styles = StyleSheet.create({
    wrapperPromoSub:{
        backgroundColor:'white',
        elevation:4,
        borderRadius:8,
        width: width / 2 - 27,
        marginRight: 18,
        marginBottom: 18
    },
    promoImage:{
        height:width/2-27,
        width:width/ 2 - 27,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    wrapperTextPromo:{
        marginVertical:10,
        marginBottom: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    textPromo:{
        fontSize:15
    },
    textDiskon:{
        position:'absolute',
        top: 10,
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 4,
        left: 4
    },
    buttonOrderWraper:{
        marginBottom:8,
        flexDirection:'row',
        justifyContent:'center',

    },
    textCalendar:{
        marginLeft:10,
        marginRight:10,
        justifyContent: 'center',
        fontSize:20,
        color:'#575757',
    },
    buttonOrder:{
        borderRadius:5,
        backgroundColor: '#6495ed',
        alignItems:'center',
        justifyContent: 'center',
        width: 35,
        height: 30
  

    },
    buttonProses:{
        borderRadius:5,
        backgroundColor: '#63a819',
        alignItems:'center',
        justifyContent: 'center',
        width:35,
        marginLeft: 10,
        height: 30

    }
});

const SubMenuItems = ({images, text, harga, handleAddOrder}) => {

    const initData = {
        nameOrder : "",
        qty : 0,
        harga : 0
    }

    const [data, setData] = useState(initData);

    const onPressTambah = () => {
        setData({
            ...data,
            nameOrder: text,
            qty: data.qty + 1,
            harga : harga
        });
    };

    const onPressKurang = () => {
        if(data.qty > 0){
            setData({
                ...data,
                qty: data.qty - 1
            });
        }
        if(data.qty === 0){
            setData({
                ...data,
                nameOrder: "",
                harga : 0
            });
        }
    }

    const addOrder = (data) => {
        if(data.qty > 0){
             handleAddOrder(data)
             setData(initData)
         }

    }


    return ( 
            <View style={styles.wrapperPromoSub}> 
                <Image source={images} style={styles.promoImage} />
                <View style={styles.wrapperTextPromo}>
                    <Text>{text}</Text>
                    <Text>Rp.{harga}</Text>
                </View>
                <View style={styles.buttonOrderWraper}>
                    <TouchableHighlight onPress={onPressTambah}>
                    <View style={styles.buttonOrder}>
                        <Text> + </Text>
                    </View>
                
                    </TouchableHighlight>

                    <Text style={styles.textCalendar}>{data.qty}</Text>
                    
                    <TouchableHighlight onPress={onPressKurang}>
                    <View style={styles.buttonOrder}>
                        <Text> - </Text>
                    </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={()=> addOrder(data)}>
                    <View style={styles.buttonProses}>
                        <MaterialCommunityIcons name="basket-plus-outline" color={'black'} size={18} />
                    </View>
                    </TouchableHighlight>
                </View>
            </View>
    )
}

SubMenuItems.propTypes = {
    image: PropTypes.string,
    text: PropTypes.string
}

SubMenuItems.defaultProps = {
    image: '',
    text: '',
}

export default SubMenuItems