import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Wrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 18px 16px;
  `}
`;

export const Category = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;

export const Icon = styled(Feather as any)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(20)}px;
  `}
`;
