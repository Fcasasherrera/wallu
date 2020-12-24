import React from 'react';
import { SwipeableModal } from 'react-native-swipeable-modal';
import { Modal } from "react-native";
import { colors } from 'shared/styles';
import styled from 'styled-components/native';
import { RowModal, Label } from 'Shared/components/commons'

type ModalProps = {
    modalVisible: boolean;
    title?: string;
    setModalVisible: any;
};

export const ModalPopUp: React.FC<ModalProps> = ({
    modalVisible,
    title,
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
                    justifyContent: 'center',
                }}
            >
                
                <Container style={{ backgroundColor: colors.white, borderRadius: 16, paddingTop: 32, height: 250, marginHorizontal: 16, }}>
                    <RowModal style={{ padding: 0, borderBottomWidth: 1, borderColor: colors.lightGray }}>
                        <Label style={{color: colors.black, fontSize: 18}}>{title}</Label>
                    </RowModal>
                    <RowModal style={{ flexDirection: 'column', padding: 32, backgroundColor: colors.white, }}>
                        {children}
                    </RowModal>
                </Container>
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