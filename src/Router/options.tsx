import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';
import { colors } from 'shared/styles';
import FIcon from 'react-native-vector-icons/MaterialIcons';

export const commonScreenOptions: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.white,
  },
  headerStyle: {
    elevation: 0,
    backgroundColor: colors.black,
    shadowRadius: 0,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
  },
  headerBackTitle: null,
  headerBackTitleVisible: false,
  headerBackImage: () => (
    <FIcon name="arrow-back-ios" size={24} color={colors.white} />
  ),
  headerLeftContainerStyle: {
    paddingLeft: 16,
  },
};
