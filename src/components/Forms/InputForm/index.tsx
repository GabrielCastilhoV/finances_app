import React from "react";
import { TextInputProps } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";

import * as S from "./styles";

type InputFormProps = {
  control: Control;
  name: string;
  error: string;
} & TextInputProps;

export const InputForm = ({
  control,
  name,
  error,
  ...rest
}: InputFormProps) => {
  return (
    <S.Wrapper>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};
