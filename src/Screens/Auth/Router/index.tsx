import React from 'react';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import { AuthScreen } from '../Screens/index';
import { commonScreenOptions } from 'Router/options';
import { SmsScreen } from '../Screens/SmsScreen';
import { CountryScreen } from '../Screens/CountryScreen';
import { PasswordScreen } from '../Screens/PasswordScreen';
const CreateAccount = createStackNavigator();

export const CreateAccountRoutes = () => {
    return (
        <CreateAccount.Navigator
            screenOptions={commonScreenOptions}
            initialRouteName="AuthScreen">
            <CreateAccount.Screen
                name="AuthScreen"
                options={{ title: '' }}
                component={AuthScreen}
            />
            <CreateAccount.Screen
                name="SmsScreen"
                options={{ title: 'Codigo SMS' }}
                component={SmsScreen}
            />
            <CreateAccount.Screen
                name="CountryScreen"
                options={{ title: 'Pais' }}
                component={CountryScreen}
            />
            <CreateAccount.Screen
                name="PasswordScreen"
                options={{ title: 'Contraseña' }}
                component={PasswordScreen}
            />
        </CreateAccount.Navigator>
    );
};
export default CreateAccountRoutes;

const termsScreenOptions: StackNavigationOptions = {
    title: 'User service agreement',
};
const setPasswordScreenOptions = (props): StackNavigationOptions => ({
    title: props.route.params.name,
});
