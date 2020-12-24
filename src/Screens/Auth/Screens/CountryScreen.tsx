import React, { useState, useEffect } from 'react';
import { View, Animated, CheckBox } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'shared/components';
import { Label } from 'Shared/components/commons'
import { colors, Countrys, WalluInfo } from 'shared/styles';
import FIcon from 'react-native-vector-icons/MaterialIcons';
import { ModalSwipable } from 'Shared/components/ModalSwipable';
import { ModalPopUp } from 'Shared/components/ModalPopUp';


export const CountryScreen = ({ navigation }) => {
    const [state, setState] = useState({
        heightLogo: 100,
        country: '',
        errorMessage: ''
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
    const [countryModal, setCountryModal] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [readTerms, setReadTerms] = useState(false);
    const [readPrivacy, setReadPrivacy] = useState(false);
    const [readTermsActive, setReadTermsActive] = useState(false);
    const [readPrivacyActive, setReadPrivacyActive] = useState(false);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }, []);
    const goPassword = () => {
        // navigation.navigate('CountryScreen')
        if (state.country === '') {
            setState({ ...state, errorMessage: 'Por favor selecciona un país para continuar '})
            setPopUp(!popUp)
        } else if (!readTermsActive) {
            setState({ ...state, errorMessage: 'Por favor lea los términos y condiciones para continuar ' })
            setPopUp(!popUp)
        } else if (!readPrivacyActive) {
            setState({ ...state, errorMessage: 'Por favor lea el aviso de privacidad para continuar ' })
            setPopUp(!popUp)
        } else {
            navigation.navigate('PasswordScreen') 
        }
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
                        <InputButton onPress={() => { setCountryModal(!countryModal) }}>
                            <Label secondary={state.country === ''} style={{ textAlign: 'center' }}>{state.country === '' ? 'Código de país' : state.country}</Label>
                            <CustomIconInput name="arrow-forward-ios" size={16} color={colors.lightGray} />
                        </InputButton>
                    </InputBox>
                    <InputBox style={{ flexDirection: 'column'}}>
                        <CheckButton onPress={() => { setReadTerms(!readTerms)}}>
                            <Check>
                                {readTermsActive && 
                                 <CheckInternal />
                                }
                            </Check>
                            <Label secondary style={{ textAlign: 'center' }}>Terminos y condiciones</Label>
                        </CheckButton>
                        <CheckButton onPress={() => { setReadPrivacy(!readPrivacy) }} style={{ marginTop: 16, }}>
                            <Check>
                                {readPrivacyActive &&
                                    <CheckInternal />
                                }
                            </Check>
                            <Label secondary style={{ textAlign: 'center' }}>Aviso de privacidad</Label>
                        </CheckButton>
                    </InputBox>
                </LoginBox>
                <ButtonBox>
                    <Button isLoading={false} isActivated={true} onClick={goPassword}>
                        Continuar
                    </Button>
                </ButtonBox>
            </AnimatedView>
            <ModalPopUp modalVisible={popUp}
                        buttonActive={true}
                        buttonLoading={false}
                        setModalVisible={setPopUp}
                        title={'Revisa tus datos '}>
                <Label secondary>
                    {state.errorMessage}
                </Label>
                <ButtonBox>
                    <Button isLoading={false} isActivated={true} onClick={() => setPopUp(false)}>
                        OK
                    </Button>
                </ButtonBox>
            </ModalPopUp>
            <ModalSwipable modalVisible={readTerms} 
                           buttonActive={true} 
                           buttonLoading={false} 
                           setModalVisible={(value) => { setReadTerms(value); setReadTermsActive(true); }}
                           title={'Términos y condiciones '}>
                <Label>
                    {WalluInfo[0].content.map(value => {
                        return value
                    })}
                </Label>
            </ModalSwipable>
            <ModalSwipable modalVisible={readPrivacy}
                buttonActive={true}
                buttonLoading={false}
                setModalVisible={(value) => { setReadPrivacy(value); setReadPrivacyActive(true);}}
                title={'Aviso de privacidad '}>
                <Label>
                    {WalluInfo[1].content.map(value => {
                        return value
                    })}
                </Label>
            </ModalSwipable>
            <ModalSwipable modalVisible={countryModal}
                buttonActive={true}
                buttonLoading={false}
                setModalVisible={setCountryModal}
                title={'Código del país'}
                noScroll>
                <ContainerModal>
                    <List
                        data={Countrys}
                        contentContainerStyle={{ display: 'flex', }}
                        renderItem={({ item, index }) => {
                            return (
                                <ItemSelect onPress={() => {
                                    setCountryModal(false)
                                    setState({...state, country: item.name})
                                }}>
                                    <Label>{item.name}</Label>
                                </ItemSelect>
                            )
                        }}
                        keyExtractor={(item, index) => { return index.toString() }}
                    />
                </ContainerModal>
            </ModalSwipable>
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
const ItemSelect = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
    display: flex;
    border-bottom-width: 1px;
    border-color: ${colors.white};
`

const ContainerModal = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary};
`
const List = styled.FlatList`
    background-color: ${colors.primary};
    width: 100%;
`
const CustomIconInput = styled(FIcon)`
    position: absolute;
    top: 2px;
    right: 8px;
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
    justify-content: center;
    display: flex;
    padding-right: 32px;
    padding-left: 32px;
    padding-top: 50px;
`
const InputBox = styled(Animated.View) <ContainerProps>`
    ${ShadowStyles}
    height: 40px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const InputButton = styled.TouchableOpacity`
    height: 30px;
    width: 80%;
    color: ${colors.white};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.lightGray};
`
const CheckButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Check = styled.View`
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 150px;
    margin-right: 8px;
    border-width: 1px;
    border-color: ${colors.lightGray}
`
const CheckInternal = styled.View`
    align-self: center;
    width: 10px;
    height: 10px;
    border-radius: 150px;
    background-color: ${colors.primary};
`

export const ButtonBox = styled(Animated.View) <ContainerProps>`
    ${ShadowStyles}
    width: 100%;
    padding-right: 42px;
    padding-left: 42px;
    margin-top: 32px;
`