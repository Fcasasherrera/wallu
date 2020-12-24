import React from 'react';
import { Platform } from 'react-native';
import { SwipeableModal } from 'react-native-swipeable-modal';
import { Modal } from "react-native";
import { colors } from 'shared/styles';
import styled from 'styled-components/native';
import { RowModal, ButtonTransparent, Label } from 'Shared/components/commons'
import FIcon from 'react-native-vector-icons/MaterialIcons';

type ModalProps = {
    modalVisible: boolean; 
    noScroll?: boolean;
    title?: string;
    setModalVisible: any;
};

export const ModalSwipable: React.FC<ModalProps> = ({ 
    modalVisible,
    title,
    noScroll,
    setModalVisible,
    children,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false)
            }}
        >
            <SwipeableModal
                closeModal={() => setModalVisible(false)}
                style={{
                    backgroundColor: 'rgba(0,0,0,.4)',
                    justifyContent: 'flex-end',
                }}
            >
                {!noScroll ? 
                    <ContainerScroll contentContainerStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center',}} style={{ backgroundColor: colors.black, padding: 16, borderRadius: 16, paddingTop: Platform.OS === 'ios' ? 64 : 32,}}>
                        <RowModal style={{ padding: 0, }}>
                            <ButtonTransparent onPress={() => setModalVisible(false)}>
                                <FIcon name="arrow-back-ios" size={24} color={colors.white} />
                            </ButtonTransparent>
                            <Label>{title}</Label>
                        </RowModal>
                        <RowModal style={{ flexDirection: 'column', padding: 0, }}>
                            {children}
                        </RowModal>
                    </ContainerScroll>
                :
                    <Container style={{ backgroundColor: colors.black, borderRadius: 16, paddingTop: Platform.OS === 'ios' ? 64 : 32, }}>
                        <RowModal style={{ padding: 0, }}>
                            <ButtonTransparent onPress={() => setModalVisible(false)}>
                                <FIcon name="arrow-back-ios" size={24} color={colors.white} />
                            </ButtonTransparent>
                            <Label>{title}</Label>
                        </RowModal>
                        <RowModal style={{ flexDirection: 'column', padding: 0, backgroundColor: colors.primary, }}>
                            {children}
                        </RowModal>
                    </Container>
                }
            </SwipeableModal>
        </Modal>
    );
};

const ContainerScroll = styled.ScrollView`
    height: 100%;
`
const Container = styled.View`
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    display: flex;
`