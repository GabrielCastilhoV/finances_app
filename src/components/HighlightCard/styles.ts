import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";

type TypeProps = {
  type: "income" | "outcome" | "total";
};

export const Wrapper = styled.View<TypeProps>`
  ${({ theme, type }) => css`
    width: ${RFValue(300)}px;

    padding: 19px 23px ${RFValue(42)}px;
    margin-right: 16px;

    background-color: ${type === "total"
      ? theme.colors.secondary
      : theme.colors.shape};
    border-radius: 5px;
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${type === "total" ? theme.colors.shape : theme.colors.text_dark};
  `}
`;

export const Icon = styled(Feather as any)<TypeProps>`
  ${({ theme, type }) => css`
    font-size: ${RFValue(40)}px;

    ${type === "income" &&
    css`
      color: ${theme.colors.success};
    `}

    ${type === "outcome" &&
    css`
      color: ${theme.colors.attention};
    `}

  ${type === "total" &&
    css`
      color: ${theme.colors.shape};
    `}
  `}
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.text_dark};

    margin-top: 38px;
  `}
`;

export const LastTransaction = styled.Text<TypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color: ${type === "total" ? theme.colors.shape : theme.colors.text};
  `}
`;
