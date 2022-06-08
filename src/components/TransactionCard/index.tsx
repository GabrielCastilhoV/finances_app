import React from "react";
import { Text } from 'react-native';
import NumberFormat from "react-number-format";

import * as S from "./styles";

type Category = {
  name: string;
  icon: string;
};

export type TransactionProps = {
  type: 1 | 2;
  description: string;
  amount: string;
  category: 1 | 2 | 3 | 4 | 5;
};

type TransactionCardProps = {
  data: TransactionProps;
};

export const TransactionCard = ({ data }: TransactionCardProps) => {

  const transactionCategories = {
    1: 'purchases',
    2: 'Salary',
    3: 'Car',
    4: 'Food',
    5: 'Studies',
  }

  const transactionCategoriesIcon = {
    1: 'shopping-bag',
    2: 'dollar-sign',
    3: 'crosshair',
    4: 'coffee',
    5: 'book',
  }

  return (
    <S.Wrapper>
      <S.Title>{data.description}</S.Title>

      <S.Amount type={data.type}>
        <NumberFormat 
          value={data.amount}
          renderText={value => <Text> {value}</Text>}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$ '} />
      </S.Amount>

      <S.Footer>
        <S.Category>
          <S.Icon name={transactionCategoriesIcon[data.category]} />
          <S.CategoryName>{transactionCategories[data.category]}</S.CategoryName>
        </S.Category>

      </S.Footer>
    </S.Wrapper>
  );
};
