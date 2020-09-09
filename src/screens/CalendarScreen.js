import React, { useState } from "react";
import {
    View, Text, StyleSheet, Image, Icon, Alert,
    Modal,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TouchableHighlight } from "react-native-gesture-handler";
import { ReactBurgerMenu } from "react-burger-menu";


const CalendarScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.topMenu}>
                    <Image style={styles.menu} source={require('../Images/Menu.png')} />
                    <Image style={styles.userlogo} source={require('../Images/userlogo.png')} />
                </View>
                <View style={styles.Cale}>
                    <Calendar
                        onDayPress={(day) => { console.log('selected day', day.dateString) }}
                        horizontal={true}
                        pagingEnabled={true}
                        hideExtraDays={false}
                        style={{
                        }}
                        theme={{
                            calendarBackground: '#1D1C1C',
                            textSectionTitleColor: '#b6c1cd',
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: 'white',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#FFFFFF',
                            arrowColor: 'white',
                            disabledArrowColor: 'white',
                            monthTextColor: 'white',
                            indicatorColor: 'white',
                            textDayFontFamily: 'Roboto',
                            textMonthFontFamily: 'Roboto',
                            textDayHeaderFontFamily: 'Roboto',
                            textDayFontWeight: '300',
                            textDayHeaderFontWeight: '300',
                            textDayFontSize: 15,
                            textMonthFontSize: 36,
                            textDayHeaderFontSize: 15
                        }}
                    />
                </View>
                <View style={styles.Line}>
                    <View style={styles.BottomMenu}>
                        <Image style={styles.map} source={require('../Images/MapIcon.png')} />
                        <Image style={styles.logo} source={require('../Images/logo-white.png')} />
                        <Image style={styles.search} source={require('../Images/search-menu.png')} />
                    </View>
                </View>
            </View>
        </View>




    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#353333',
    },
    container2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#191818',
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
        width: 45,
        height: 45,
        marginRight: 10,
    },
    Cale: {
        width: '95%',
        alignItems: 'stretch',
        marginBottom: '40%',
    },
    Line: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    BottomMenu: {
        width: '95%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        borderTopColor: 'white',
        borderTopWidth: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    map: {
        width: 40,
        height: 40,
    },
    logo: {
        width: 70,
        height: 70,
    },
    search: {
        width: 40,
        height: 40,
    },
});
export default CalendarScreen;

