import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                <View style={styles.container2}>
                    <Image style={styles.logo} source={require('../Images/logo-diario.png')} />
                </View>
                <Text style={styles.titulo}>Diario A Diario</Text>
                <Text style={styles.titulo2}>Cambiando el futuro un dia a la vez</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#004680',
        justifyContent: 'center',
    },
    container2: {
        backgroundColor: '#ffff',
        borderRadius: 30,
        marginLeft: '25%',
        marginRight: '25%',
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        margin: '15%',
        alignSelf: 'center',
    },
    titulo: {
        color: '#ffff',
        fontSize: 40,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginTop: '20%'
    },
    titulo2: {
        color: '#ffff',
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginTop: '10%',
        marginBottom: '10%',
    },
});

export default HomeScreen;