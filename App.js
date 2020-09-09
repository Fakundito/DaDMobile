import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CalendarScreen from './src/screens/CalendarScreen'; 
import SplashScreen from './src/screens/SplashScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    Calendar: CalendarScreen, 
    Splash: SplashScreen,
  },
  {

    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'DiarioAdiario App',
    },
    headerLayoutPreset: 'center'
  },

);

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer;

