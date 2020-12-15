import React, { useState, useEffect } from 'react';
import { Text, View, Platform, Animated } from 'react-native';
import styled from 'styled-components/native';
import { loginApi, getCurrent } from 'shared/Api';
import { Button } from 'shared/components';
import { Label } from 'Shared/components/commons'
import { colors } from 'shared/styles';
import BaseIcon from 'react-native-vector-icons/MaterialIcons';
import BaseSimpleIcon from 'react-native-vector-icons/SimpleLineIcons';


export const AuthScreen = ({ navigation }) => {
    const [state, setState] = useState({
        heightLogo: 100,
        heightContain: 50,
        x: new Animated.Value(0),
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
    const [fadeAnimInput] = useState(new Animated.Value(0));
    
    useEffect(() => {
        
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 2000,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            slide();
        }, 1500);
    }, []);
    const slide = () => {
        Animated.spring(state.x, {
            toValue: -100,
            duration: 2000,
            useNativeDriver: true
        }).start();
        showInputs()
        
    };
    const showInputs = () => {
        Animated.timing(fadeAnimInput, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };
    const goSms = () => {
        navigation.navigate('SmsScreen')
    }
    
    return (
        <Container>
            {/* <LogoContainer height={state.heightLogo}> */}
                <AnimatedView
                    height={state.heightLogo}
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: state.x
                            }
                        ]
                    }}>
                        <LogoImage style={{}} source={require('assets/logo.png')} />
                        <LoginBox>
                            <InputBox style={{
                                opacity: fadeAnimInput,
                            }}>
                                <Icon
                                    name={state.status ? 'local-phone' : 'local-phone'}
                                    size={24}
                                    isValid={state.status}
                                />
                                <InputText
                                    isValid={state.status}
                                    onChangeText={text => setState({ ...state, user: text })}
                                    value={state.user}
                                    keyboardType='number-pad'
                                    autoCapitalize='none'
                                    placeholder="Telefono"
                                    placeholderTextColor={colors.white}
                                />
                            </InputBox>
                        </LoginBox>
                        <ButtonBox style={{
                            opacity: fadeAnimInput,
                        }}>
                            <Button isLoading={false} isActivated={true} onClick={goSms}>
                                Entrar
                            </Button>
                        </ButtonBox>
                </AnimatedView>
            {/* </LogoContainer> */}
            
        </Container>
    );
};

const LogoImage = styled.Image`
  width: 100%;
  resize-mode: contain;
`;
const Container = styled.View`
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    display: flex;
    background-color: ${colors.black};
`
const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
type ContainerProps = {
    height?: string;
};
const LogoContainer = styled.View<ContainerProps>`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: ${props => props.height}%;
    overflow: hidden;
`
const AnimatedView = styled(Animated.View)<ContainerProps>`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: ${props => props.height}%;
    overflow: hidden;
`;
const Icon = styled(BaseIcon) <{ isValid: boolean }>`
  color: ${props => (props.isValid ? colors.primary : colors.gray)};
  margin-left: 12px;
`;
const SimpleIcon = styled(BaseSimpleIcon) <{ isValid: boolean }>`
  color: ${props => (props.isValid ? colors.primary : colors.gray)};
  margin-left: 12px;
`;
const ShadowStyles = `
    shadow-color: ${colors.blackTransparentLight};
    shadow-offset: 0px 3px;
    shadow-opacity: .4;
    shadow-radius: 3px;
    elevation: 1;
`
const LoginBox = styled.View`
    align-items: center;
    justify-content: flex-start;
    display: flex;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 50px;
`
const InputBox = styled(Animated.View) <ContainerProps>`
    ${ShadowStyles}
    height: 40px;
    width: 100%;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    border-bottom-width: 1px;
    border-bottom-color: white;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
`
const InputText = styled.TextInput`
    height: 40px;
    width: 80%;
    color: ${colors.white};

`
const ButtonBox = styled(Animated.View) <ContainerProps>`
    ${ShadowStyles}
    width: 100%;
    padding-right: 42px;
    padding-left: 42px;
    margin-top: 12px;
`