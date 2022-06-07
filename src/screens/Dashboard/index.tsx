import React from "react";
import { Image } from 'react-native'
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionProps,
} from "../../components/TransactionCard";

import logoImage from '../../images/logo.png'

import * as S from "./styles";

export type DataListProps = {
  id: string;
} & TransactionProps;

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "income",
      title: "Desenvolvimento",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },

    {
      id: "2",
      type: "outcome",
      title: "Desenvolvimento",
      amount: "R$ 5.000,00",
      category: {
        name: "Vendas",
        icon: "coffee",
      },
      date: "13/04/2020",
    },

    {
      id: "3",
      type: "income",
      title: "Desenvolvimento",
      amount: "R$ 3.000,00",
      category: {
        name: "Vendas",
        icon: "shopping-bag",
      },
      date: "13/04/2020",
    },
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <Image source={logoImage} />
       <S.HeaderTitle>Finances</S.HeaderTitle>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          type="income"
          title="Income"
          amount="$ 10.000,00"
        />

        <HighlightCard
          type="outcome"
          title="Outcome"
          amount="$ 2.000,00"
        />

        <HighlightCard
          type="total"
          title="Total"
          amount="$ 8.000,00"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Transactions</S.Title>

        <S.TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Wrapper>
  );
};
