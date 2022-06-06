import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

type IconProps = {
  type: "income" | "outcome";
  isActive?: boolean;
};

export const Wrapper = styled(TouchableOpacity)<IconProps>`
  ${({ theme, isActive, type }) => css`
    width: 48%;
    padding: 16px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${theme.colors.text};
    border-radius: 5px;

    ${isActive &&
    type === "income" &&
    css`
      background-color: ${theme.colors.success_light};
      border: none;
    `};

    ${isActive &&
    type === "outcome" &&
    css`
      background-color: ${theme.colors.attention_light};
      border: none;
    `};
  `}
`;

export const Icon = styled(Feather as any)<IconProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${type === "income" ? theme.colors.success : theme.colors.attention};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
  `}
`;
