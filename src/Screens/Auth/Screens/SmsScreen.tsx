import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'shared/components';
import { Label } from 'Shared/components/commons'
import { colors } from 'shared/styles';


export const SmsScreen = ({ navigation }) => {
    const [state, setState] = useState({
        heightLogo: 100,
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);
    const goSms = () => {
        navigation.navigate('SmsScreen')
    }

    return (
        <Container>
            <AnimatedView
                height={state.heightLogo}
                style={{
                    opacity: fadeAnim,
                }}>
                <LoginBox>
                    <View style={{paddingBottom: 16,}}>
                        <Label style={{textAlign: 'center'}} secondary>Enviamos un código SMS con 
                        un código a</Label>
                        <Label style={{ textAlign: 'center' }}>+52 1 3333 6789 2234</Label>
                    </View>
                    <InputBox>
                        <InputText
                            isValid={state.status}
                            onChangeText={text => setState({ ...state, user: text })}
                            value={state.user}
                            keyboardType='number-pad'
                            autoCapitalize='none'
                            placeholder="Ingresa tu código"
                            placeholderTextColor={colors.lightGray}
                            style={{ textAlign: 'center'}}
                        />
                    </InputBox>
                    <Label style={{ textAlign: 'center' }}>El código es válido por 900 segundos </Label>
                </LoginBox>
                <ButtonBox>
                    <Button isLoading={false} isActivated={true} onClick={goSms} secondary>
                        Volver a enviar SMS
                    </Button>
                </ButtonBox>
                <ButtonBox>
                    <Button isLoading={false} isActivated={true} onClick={goSms}>
                        Entrar
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