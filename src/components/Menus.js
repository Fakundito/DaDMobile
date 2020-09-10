import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Menus = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topMenu}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                    <Image style={styles.menu} source={require('../Images/Menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Image style={styles.userlogo} source={require('../Images/userlogo.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.Li}>
                <View style={styles.Line}>
                    <View style={styles.BottomMenu}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Image style={styles.map} source={require('../Images/MapIcon.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Image style={styles.logo} source={require('../Images/logo-white.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Image style={styles.search} source={require('../Images/search-menu.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    topMenu: {
        marginTop: 10,
        flex: 1,
        width: '100%',
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    menu: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    userlogo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    Li: {
        justifyContent: 'flex-end',
    },
    Line: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    BottomMenu: {
        height: 70,
        width: '95%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderTopColor: 'white',
        borderTopWidth: 0.5,
        justifyContent: 'space-evenly',
    },
    map: {
        margin: 15,
        width: 40,
        height: 40,
    },
    logo: {
        width: 70,
        height: 70,
    },
    search: {
        margin: 15,
        width: 40,
        height: 40,
    },
});

export default Menus;