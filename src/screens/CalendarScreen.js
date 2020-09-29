import React, { useState } from "react";
import {
    View, StyleSheet, Icon, Alert, Modal, Text
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { ReactBurgerMenu } from "react-burger-menu";
import Menus from '../components/Menus';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

const CalendarScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Menus />
                <View style={styles.Cale}>
                    <Calendar
                        onDayPress={(day) => { console.log('selected day', day.dateString), navigation.navigate('Notice') }}
                        horizontal={true}
                        pagingEnabled={true}
                        hideExtraDays={false}
                        style={{
                        }}
                        theme={{
                            calendarBackground: '#000000', //Fondo
                            textSectionTitleColor: '#ffffff', //Nombres de los dias
                            textSectionTitleDisabledColor: '#d9e1e8',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5', //Dia actual
                            dayTextColor: '#ffffff', //Todos los dias
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: '#ffffff', //Flechas
                            disabledArrowColor: '#ffffff',
                            monthTextColor: '#ffffff', //Mes
                            indicatorColor: '#ffffff',
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
            </View>
        </View>




    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    container2: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#191818',
    },
    cont3: {
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
    Cale: {
        width: '95%',
        alignItems: 'stretch',
        top: '15%',
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
        borderTopColor: '#ffffff',
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

export default CalendarScreen;

