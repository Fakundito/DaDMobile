import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Image style={styles.logo} source={require('../Images/logo-diario.png')} />
                <Text style={styles.titulo}>Diario A Diario</Text>
            
                <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.boton}
                    onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.textBoton}>Iniciar sesión</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.boton}
                    onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.textBoton}>Registrarse</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
    container2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: '5%',
        marginTop: '10%',
    },
    titulo: {
        color: '#000000',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: '10%',
        marginTop: '10%'
    },
    containerButtons: {
        backgroundColor: '#004680',
        height: '100%',
        width: '100%',
        borderRadius: 100,
        padding: '18%',
    },
    boton: {
        borderRadius: 50,
        backgroundColor: '#ffff',
        width: 270,
        height: 60,
        marginTop: '35%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        justifyContent: 'center',
    },
    textBoton: {
        color: '#004680',
        fontSize: 24,
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
});

export default HomeScreen;