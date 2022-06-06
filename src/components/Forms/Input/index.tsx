import React from "react";
import { TextInputProps } from "react-native";

import * as S from "./styles";

export const Input = ({ ...rest }: TextInputProps) => {
  return <S.Wrapper {...rest} />;
};
