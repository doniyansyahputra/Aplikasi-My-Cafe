import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SubMenuItems from "./SubMenuItems";


const styles = StyleSheet.create({
    wrapperMainFeature: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        flexWrap: 'wrap',
        width: '100%'
    },
    wrapperPromo: {
        marginHorizontal: 18,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 25,
     
    }
});


const MenuItems = (props) => {
    return (
        <View style={styles.wrapperPromo}>
             {props.data.map((item, i) => (
                 <SubMenuItems
                 key={i}
                 images={{ uri: item.images }}
                 text={item.text}
                 harga={item.harga}
                 handleAddOrder={props.handleAddOrder}
                />
             )
            )}
           
            

        </View>
    )
}

export default MenuItems