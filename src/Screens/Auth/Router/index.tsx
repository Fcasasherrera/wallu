import React from 'react';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import { AuthScreen } from '../Screens/index';
import { commonScreenOptions } from 'Router/options';
import { SmsScreen } from '../Screens/SmsScreen';
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
