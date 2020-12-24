import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'shared/components';
import { Label } from 'Shared/components/commons'
import { colors } from 'shared/styles';


export const PasswordScreen = ({ navigation }) => {
    const [state, setState] = useState({
        heightLogo: 100,
        pass: '',
        confirmPass: ''
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);
    const validateForm = () => {
        if (state.pass === '') {
            return false
        }
        if (state.confirmPass === '') {
            return false
        }
        if (state.pass !== state.confirmPass) {
            return false
        }
        if (state.pass.length < ) {
            return false
        }
    }
    const goPinCode = async () => {
        let validation = await validateForm()
        navigation.navigate('CountryScreen')
    }

    return (
        <Container>
            <AnimatedView
                height={state.heightLogo}
                style={{
                    opacity: fadeAnim,
                }}>
                <LoginBox>
                    <InputBox>
                        <InputText
                            isValid={state.status}
                            onChangeText={text => setState({ ...state, user: text })}
                            value={state.pass}
                            autoCapitalize='none'
                            placeholder="Crear nueva contraseña"
                            placeholderTextColor={colors.lightGray}
                            style={{ textAlign: 'center' }}
                            secureTextEntry
                        />
                    </InputBox>
                    <InputBox>
                        <InputText
                            isValid={state.status}
                            onChangeText={text => setState({ ...state, user: text })}
                            value={state.confirmPass}
                            autoCapitalize='none'
                            placeholder="Confirma la contraseña"
                            placeholderTextColor={colors.lightGray}
                            style={{ textAlign: 'center' }}
                            secureTextEntry
                        />
                    </InputBox>
                </LoginBox>
                <ButtonBox>
                    <Button isLoading={false} isActivated={true} onClick={goPinCode}>
                        Continuar
                    </Button>
                </ButtonBox>
            </AnimatedView>
        </Container>
    );
};
const Container = styled.View`
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;
    background-color: ${colors.black};
`
type ContainerProps = {
    height?: string;
};
const AnimatedView = styled(Animated.View) <ContainerProps>`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: ${props => props.height}%;
    overflow: hidden;
    margin-top: -100px;
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
    justify-content: center;
    display: flex;
    flex-direction: row;
`
const InputText = styled.TextInput`
    height: 40px;
    width: 100%;
    color: ${colors.white};
`
const ButtonBox = styled(Animated.View) <ContainerProps>`
    ${ShadowStyles}
    width: 100%;
    padding-right: 42px;
    padding-left: 42px;
    margin-top: 16px;
`