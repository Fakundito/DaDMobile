import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Notice = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { console.log('Noticia') }}>
                <View style={styles.container2}>
                    <Image style={styles.foto} source={require('../Images/logo-diario.png')} />
                    <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.line} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
    },
    container2: {
        flexDirection: 'row',
        marginTop: '3%',
        marginBottom: '3%',
        marginRight: '30%',
    },
    foto: {
        width: 120,
        height: 90,
        marginRight: 20,
    },
    title: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
    line: {
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
    }
})

export default Notice;