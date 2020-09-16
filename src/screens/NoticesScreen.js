import React from 'react';
import { View, StyleSheet } from 'react-native';
import Notice from '../components/Notice';
import Menus from '../components/Menus';

const NoticeScreen = () => {
    return (
        <View style={styles.container}>
            <Notice />
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
});

export default NoticeScreen;