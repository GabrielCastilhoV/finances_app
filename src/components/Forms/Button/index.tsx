import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper {...rest}>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
