import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Notice from '../components/Notice';
import Menus from '../components/Menus';

const NoticeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch} onPress={() => { navigation.navigate('Calendar') }}>
                <Notice />
            </TouchableOpacity>
            <Notice />
            <Notice />
            <Notice />
            <Notice />
            <Notice />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#191818',
    },
    touch: {
        alignItems: 'center'
    }
});

export default NoticeScreen;