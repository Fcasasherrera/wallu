import { color } from 'react-native-reanimated';
import { colors, fontWeight } from 'shared/styles';
import styled from 'styled-components/native';

export const BaseButtonStyles = `
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  max-height: 40px;
  margin-top: 5px;
`;
export const ShadowStyles = `
    shadow-color: ${colors.blackTransparentLight};
    shadow-offset: 0px 3px;
    shadow-opacity: .4;
    shadow-radius: 3px;
    elevation: 3;
`
type StyledContainerProps = {
  center?: string;
};
export const Container = styled.View<StyledContainerProps>`
    flexDirection: column;
    justify-content: ${props => props.center ? 'center': 'flex-start'};
    padding-right: 8px;
    padding-left: 8px;
`
const baseTextStyles = `
  font-size:14px;
`;
type StyledTextProps = {
  margin ?: string;
  secondary?: boolean;
  accent?: boolean;
  bold?: string;
  size?: string;
};
export const Label = styled.Text<StyledTextProps>`
  ${baseTextStyles}
  ${props => props.size ? 'font-size:' + props.size : ''}
  color: ${props => props.secondary ? colors.lightGray : props.accent ? colors.primary : colors.white }
  font-weight: ${props => props.bold === 'light' ? fontWeight.light : props.bold === 'medium' ? fontWeight.medium : props.bold === 'bold' ? fontWeight.bold : props.bold === 'extraBold' ? fontWeight.extraBold : fontWeight.normal}
`

export const IconContainer = styled.TouchableOpacity.attrs(props => ({}))`
  padding: 8px;
  border-radius: 50px;
`;
type StyleBgProps = {
  
};
export const ImgBackground = styled.ImageBackground<StyleBgProps>`
    flex: 1;
    resize-mode: contain;
    justify-content: center;
    align-items: center;
`
export const ImgIcon = styled.Image`
    width: 24px;
    height: 24px;
    resize-mode: contain;
`
export const RowModal = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-horizontal: 25px;
    padding-bottom: 25px;
    width: 100%;
`
export const ButtonTransparent = styled.TouchableOpacity`
    position: absolute;
    left: 16px;
    top: -5px;
    background-color: transparent;
`