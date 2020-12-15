import {Dimensions} from 'react-native';
export const colors = {
  primary: '#E13510', /* color principal */
  primaryLigth: '#575757', /* color secundario */
  primaryDark: '#2330d7',
  accent: '#00CC00',
  accentLight: '#c9f4c9',  /* color secundario -Seed */
  white: '#ffffff',
  whiteDark: '#ebe8e8',
  black: '#090808',
  blackLigth: '#c9c5c5',
  blackTransparent: 'rgba(0,0,0,0.8)',
  blackTransparentLight: 'rgba(0,0,0,0.3)',
  gray: '#969696',
  lightGray: '#707070',
  red: '#c44a57',
  error: 'rgba(221, 44, 0, 0.87)',
  pink: '#fce4ec'
};

export const borderRadius = (percentage: number) =>
  `${(Dimensions.get('window').width * percentage) / 100}px`;
