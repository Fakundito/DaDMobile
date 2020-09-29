import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Notice = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style={styles.foto} source={require('../Images/logo-diario.png')} />
                <Text style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
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
    },
    foto: {
        width: 120,
        height: 90,
        marginRight: 20,
    },
    title: {
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