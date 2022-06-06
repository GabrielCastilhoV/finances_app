import React from "react";

import * as S from "./styles";

type CategorySelectProps = {
  title: string;
  onPress: () => void;
};

export const CategorySelectButton = ({
  title,
  onPress,
}: CategorySelectProps) => {
  return (
    <S.Wrapper onPress={onPress}>
      <S.Category>{title}</S.Category>

      <S.Icon name="chevron-down" />
    </S.Wrapper>
  );
};
