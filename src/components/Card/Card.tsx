import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = (props: any) => {
    return ( 
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: props.image}}/>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.time}>{props.time}</Text>
        </View>      
    )
}

export default Card;

const styles = StyleSheet.create({
    
    card:{
        marginVertical:15,
        width:'100%',
        borderRadius:35,
        backgroundColor:'black',

    },
    image:{
        marginLeft:0,
        padding:0,
        width:'100%',
        height:'100%',
        borderRadius:30,
        position:'relative',
        opacity:0.65
    },
    title:{
        position:'absolute',
        marginTop:65,
        marginBottom:0,
        marginHorizontal:20,
        fontSize: 30,
        color:'white',
        fontWeight:'bold'

    }, time:{
        width:'20%',
        textAlign:'center',
        marginVertical: 20,
        position:'absolute',
        color:'white',
        fontSize: 25,
        fontWeight:'bold',
        bottom:0,
        borderRadius:20,
        marginLeft: 20
    }
})