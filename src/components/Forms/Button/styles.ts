import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius: 5px;
    padding: 18px;

    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.shape};
  `}
`;
