import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";


export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.shape};
  `}
`;

export const Category = styled.TouchableOpacity<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    width: 100%;
    padding: ${RFValue(15)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${isActive
      ? theme.colors.secondary_light
      : theme.colors.background};
  `}
`;

export const Icon = styled(Feather as any)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;

export const Separator = styled.View`
  ${({ theme }) => css`
    height: 1px;
    width: 100%;

    background-color: ${theme.colors.text};
  `}
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
