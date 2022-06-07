import React from "react";

import * as S from "./styles";

type HighlightCardProps = {
  title: string;
  amount: string;
  type: "income" | "outcome" | "total";
};

const icon = {
  income: "arrow-up-circle",
  outcome: "arrow-down-circle",
  total: "dollar-sign",
};

export const HighlightCard = ({
  title,
  amount,
  type,
}: HighlightCardProps) => {
  return (
    <S.Wrapper type={type}>
      <S.Header>
        <S.Title type={type}>{title}</S.Title>
        <S.Icon name={icon[type]} type={type} />
      </S.Header>

      <S.Footer>
        <S.Amount type={type}>{amount}</S.Amount>
      </S.Footer>
    </S.Wrapper>
  );
};
