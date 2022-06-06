import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

type TransactionButtonProps = {
  title: string;
  type: "income" | "outcome";
  isActive: boolean;
} & TouchableOpacityProps;

const iconType = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
};

export const TransactionButton = ({
  title,
  type,
  isActive,
  ...rest
}: TransactionButtonProps) => {
  return (
    <S.Wrapper {...rest} isActive={isActive} type={type}>
      <S.Icon name={iconType[type]} type={type} />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
