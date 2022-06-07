import React from "react";

import * as S from "./styles";

type Category = {
  name: string;
  icon: string;
};

export type TransactionProps = {
  type: "income" | "outcome";
  title: string;
  amount: string;
  category: Category;
  date: string;
};

type TransactionCardProps = {
  data: TransactionProps;
};

export const TransactionCard = ({ data }: TransactionCardProps) => {
  return (
    <S.Wrapper>
      <S.Title>{data.title}</S.Title>

      <S.Amount type={data.type}>
        {data.type === "outcome" && "-"} {data.amount}
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={data.category.icon} />
          <S.CategoryName>{data.category.name}</S.CategoryName>
        </S.Category>

        <S.Date>{data.date}</S.Date>
      </S.Footer>
    </S.Wrapper>
  );
};
